import { test } from 'uvu';
import * as assert from 'uvu/assert';
import {
  strToU8, strFromU8, zipSync, unzipSync, unzip, inflateSync,
  registerUnzipDecoder, unregisterUnzipDecoder,
  registerZstdDecoder, unregisterZstdDecoder, registerZstdDecoderFromFzstd
} from '../src/index';

const b2 = (d: Uint8Array, b: number) => d[b] | (d[b + 1] << 8);
const b4 = (d: Uint8Array, b: number) => (d[b] | (d[b + 1] << 8) | (d[b + 2] << 16) | (d[b + 3] << 24)) >>> 0;
const w2 = (d: Uint8Array, b: number, v: number) => {
  d[b] = v & 255;
  d[b + 1] = (v >>> 8) & 255;
};

const rewriteZipMethod = (zip: Uint8Array, from: number, to: number) => {
  const out = new Uint8Array(zip);
  for (let i = 0; i < out.length - 4; ++i) {
    const sig = b4(out, i);
    if (sig === 0x04034b50) {
      if (b2(out, i + 8) === from) w2(out, i + 8, to);
      i += 30 + b2(out, i + 26) + b2(out, i + 28) - 1;
    } else if (sig === 0x02014b50) {
      if (b2(out, i + 10) === from) w2(out, i + 10, to);
      i += 46 + b2(out, i + 28) + b2(out, i + 30) + b2(out, i + 32) - 1;
    }
  }
  return out;
};

test('unzipSync custom decoder can handle non-default ZIP method', () => {
  const text = 'hello custom method';
  const normal = zipSync({ 'a.txt': strToU8(text) }, { level: 6 });
  const method12 = rewriteZipMethod(normal, 8, 12);
  const out = unzipSync(method12, {
    decompress: {
      12: (data, info) => inflateSync(data, { out: new Uint8Array(info.originalSize) })
    }
  });
  assert.is(strFromU8(out['a.txt']), text);
});

test('unzip custom decoder can handle non-default ZIP method', async () => {
  const text = 'hello async custom method';
  const normal = zipSync({ 'a.txt': strToU8(text) }, { level: 6 });
  const method12 = rewriteZipMethod(normal, 8, 12);
  const out = await new Promise<Record<string, Uint8Array>>((resolve, reject) => {
    unzip(method12, {
      decompress: {
        12: (data, info) => inflateSync(data, { out: new Uint8Array(info.originalSize) })
      }
    }, (e, files) => {
      if (e) reject(e);
      else resolve(files);
    });
  });
  assert.is(strFromU8(out['a.txt']), text);
});

test('global decoder registration works for unzipSync', () => {
  const text = 'hello global sync decoder';
  const normal = zipSync({ 'a.txt': strToU8(text) }, { level: 6 });
  const method12 = rewriteZipMethod(normal, 8, 12);
  registerUnzipDecoder(12, (data, info) => inflateSync(data, { out: new Uint8Array(info.originalSize) }));
  const out = unzipSync(method12);
  unregisterUnzipDecoder(12);
  assert.is(strFromU8(out['a.txt']), text);
});

test('global decoder registration works for unzip', async () => {
  const text = 'hello global async decoder';
  const normal = zipSync({ 'a.txt': strToU8(text) }, { level: 6 });
  const method12 = rewriteZipMethod(normal, 8, 12);
  registerUnzipDecoder(12, (data, info) => inflateSync(data, { out: new Uint8Array(info.originalSize) }));
  const out = await new Promise<Record<string, Uint8Array>>((resolve, reject) => {
    unzip(method12, (e, files) => {
      if (e) reject(e);
      else resolve(files);
    });
  });
  unregisterUnzipDecoder(12);
  assert.is(strFromU8(out['a.txt']), text);
});

test('built-in BZIP2 decoder works for unzipSync (method 12)', () => {
  const z = zipStoredAsMethod('a.txt', BZ2_SAMPLE, 12);
  const out = unzipSync(z);
  assert.is(strFromU8(out['a.txt']), 'This is a test\n');
});

test('built-in BZIP2 decoder works for unzip (method 12)', async () => {
  const z = zipStoredAsMethod('a.txt', BZ2_SAMPLE, 12);
  const out = await new Promise<Record<string, Uint8Array>>((resolve, reject) => {
    unzip(z, (e, files) => {
      if (e) reject(e);
      else resolve(files);
    });
  });
  assert.is(strFromU8(out['a.txt']), 'This is a test\n');
});

test('built-in BZIP2 decoder uses async path for large original size metadata', async () => {
  const z = rewriteZipOriginalSize(zipStoredAsMethod('a.txt', BZ2_SAMPLE, 12), 300000);
  const out = await new Promise<Record<string, Uint8Array>>((resolve, reject) => {
    unzip(z, (e, files) => {
      if (e) reject(e);
      else resolve(files);
    });
  });
  assert.is(strFromU8(out['a.txt']), 'This is a test\n');
});

test('local decoder alias resolves method 20 via method 93', () => {
  const text = 'zstd alias local';
  const normal = zipSync({ 'a.txt': strToU8(text) }, { level: 6 });
  const method20 = rewriteZipMethod(normal, 8, 20);
  const out = unzipSync(method20, {
    decompress: {
      93: (data, info) => inflateSync(data, { out: new Uint8Array(info.originalSize) })
    }
  });
  assert.is(strFromU8(out['a.txt']), text);
});

test('global decoder alias resolves method 20 via method 93', () => {
  const text = 'zstd alias global';
  const normal = zipSync({ 'a.txt': strToU8(text) }, { level: 6 });
  const method20 = rewriteZipMethod(normal, 8, 20);
  registerUnzipDecoder(93, (data, info) => inflateSync(data, { out: new Uint8Array(info.originalSize) }));
  const out = unzipSync(method20);
  unregisterUnzipDecoder(93);
  assert.is(strFromU8(out['a.txt']), text);
});

test('registerZstdDecoder handles method 93', () => {
  const text = 'zstd helper 93';
  const normal = zipSync({ 'a.txt': strToU8(text) }, { level: 6 });
  const method93 = rewriteZipMethod(normal, 8, 93);
  registerZstdDecoder((data, info) => inflateSync(data, { out: new Uint8Array(info.originalSize) }));
  const out = unzipSync(method93);
  unregisterZstdDecoder();
  assert.is(strFromU8(out['a.txt']), text);
});

test('registerZstdDecoder handles method 20', () => {
  const text = 'zstd helper 20';
  const normal = zipSync({ 'a.txt': strToU8(text) }, { level: 6 });
  const method20 = rewriteZipMethod(normal, 8, 20);
  registerZstdDecoder((data, info) => inflateSync(data, { out: new Uint8Array(info.originalSize) }));
  const out = unzipSync(method20);
  unregisterZstdDecoder();
  assert.is(strFromU8(out['a.txt']), text);
});

test('registerZstdDecoderFromFzstd wires method 93 and 20', () => {
  const t93 = 'zstd fzstd helper 93';
  const t20 = 'zstd fzstd helper 20';
  const z93 = rewriteZipMethod(zipSync({ 'a.txt': strToU8(t93) }, { level: 6 }), 8, 93);
  const z20 = rewriteZipMethod(zipSync({ 'b.txt': strToU8(t20) }, { level: 6 }), 8, 20);
  registerZstdDecoderFromFzstd({
    decompress: (data) => inflateSync(data)
  });
  const o93 = unzipSync(z93);
  const o20 = unzipSync(z20);
  unregisterZstdDecoder();
  assert.is(strFromU8(o93['a.txt']), t93);
  assert.is(strFromU8(o20['b.txt']), t20);
});

test.run();
