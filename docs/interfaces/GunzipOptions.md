[**fflate**](../README.md)

***

# Interface: GunzipOptions\<TArrayBuffer\>

Options for decompressing GZIP data

## Extends

- [`InflateStreamOptions`](InflateStreamOptions.md)

## Type Parameters

### TArrayBuffer

`TArrayBuffer` *extends* `ArrayBufferLike` = `ArrayBufferLike`

## Properties

### dictionary?

> `optional` **dictionary?**: `Uint8Array`

The dictionary used to compress the original data. If no dictionary was used during compression, this option has no effect.

Supplying the wrong dictionary during decompression usually yields corrupt output or causes an invalid distance error.

#### Inherited from

[`InflateStreamOptions`](InflateStreamOptions.md).[`dictionary`](InflateStreamOptions.md#dictionary)

***

### out?

> `optional` **out?**: `Uint8Array`\<`TArrayBuffer`\>

The buffer into which to write the decompressed data. GZIP already encodes the output size, so providing this doesn't save memory.

Note that if the decompression result is larger than the size of this buffer, it will be truncated to fit.
