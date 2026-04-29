import { test } from 'uvu';
import * as assert from 'uvu/assert';
import * as fzstd from 'fzstd';
import { strFromU8, zipSync, unzipSync, registerZstdDecoderFromFzstd, unregisterZstdDecoder } from '../src/index';

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

// Real ZSTD fixture bytes from fzstd's own test vectors ("Ok")
const ZSTD_OK = new Uint8Array([
  0x28, 0xB5, 0x2F, 0xFD, 0x24, 0x02, 0x11, 0x00, 0x00, 0x4F, 0x6B, 0x64, 0x50, 0xA9, 0x5A
]);

const zipWithMethod = (name: string, payload: Uint8Array, method: number) => {
  const zipped = zipSync({ [name]: [payload, { level: 0 }] });
  return rewriteZipMethod(zipped, 0, method);
};

test('without zstd decoder, method 93 fails with unknown compression type', () => {
  unregisterZstdDecoder();
  const z = zipWithMethod('a.txt', ZSTD_OK, 93);
  assert.throws(() => unzipSync(z), /unknown compression type 93/);
});

test('without zstd decoder, method 20 fails with unknown compression type', () => {
  unregisterZstdDecoder();
  const z = zipWithMethod('a.txt', ZSTD_OK, 20);
  assert.throws(() => unzipSync(z), /unknown compression type 20/);
});

test('with fzstd adapter, method 93 fixture decodes', () => {
  registerZstdDecoderFromFzstd(fzstd);
  const z = zipWithMethod('a.txt', ZSTD_OK, 93);
  const out = unzipSync(z);
  assert.is(strFromU8(out['a.txt']), 'Ok');
  unregisterZstdDecoder();
});

test('with fzstd adapter, method 20 fixture decodes', () => {
  registerZstdDecoderFromFzstd(fzstd);
  const z = zipWithMethod('a.txt', ZSTD_OK, 20);
  const out = unzipSync(z);
  assert.is(strFromU8(out['a.txt']), 'Ok');
  unregisterZstdDecoder();
});

test.run();
