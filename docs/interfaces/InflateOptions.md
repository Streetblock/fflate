[**fflate**](../README.md)

***

# Interface: InflateOptions\<TArrayBuffer\>

Options for decompressing DEFLATE data

## Extends

- [`InflateStreamOptions`](InflateStreamOptions.md)

## Extended by

- [`UnzlibOptions`](UnzlibOptions.md)

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

The buffer into which to write the decompressed data. Saves memory if you know the decompressed size in advance.

Note that if the decompression result is larger than the size of this buffer, it will be truncated to fit.
