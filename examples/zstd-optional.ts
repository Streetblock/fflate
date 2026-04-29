import { unzipSync, registerZstdDecoderFromFzstd } from 'fflate';

/**
 * Optional ZSTD ZIP support with dynamic import.
 * Works when ZIP entries use method 93 (ZSTD) or legacy 20.
 */
export async function unzipWithOptionalZstd(zipData: Uint8Array) {
  // Lazily load only when needed by your app flow.
  const fzstd = await import('fzstd');
  registerZstdDecoderFromFzstd(fzstd);
  return unzipSync(zipData);
}

