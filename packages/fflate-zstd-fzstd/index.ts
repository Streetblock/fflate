import { registerZstdDecoder, unregisterZstdDecoder } from 'fflate';
import * as fzstd from 'fzstd';

/**
 * Installs ZSTD ZIP decoders (methods 93 and 20) using fzstd.
 */
export function installFzstdAdapter() {
  registerZstdDecoder((data) => fzstd.decompress(data));
}

/**
 * Removes previously installed ZSTD ZIP decoders.
 */
export function uninstallFzstdAdapter() {
  unregisterZstdDecoder();
}

