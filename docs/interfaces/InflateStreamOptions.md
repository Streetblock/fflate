[**fflate**](../README.md)

***

# Interface: InflateStreamOptions

Options for decompressing a DEFLATE stream

## Extended by

- [`InflateOptions`](InflateOptions.md)
- [`GunzipStreamOptions`](GunzipStreamOptions.md)
- [`GunzipOptions`](GunzipOptions.md)
- [`UnzlibStreamOptions`](UnzlibStreamOptions.md)
- [`AsyncInflateOptions`](AsyncInflateOptions.md)
- [`AsyncGunzipOptions`](AsyncGunzipOptions.md)

## Properties

### dictionary?

> `optional` **dictionary?**: `Uint8Array`

The dictionary used to compress the original data. If no dictionary was used during compression, this option has no effect.

Supplying the wrong dictionary during decompression usually yields corrupt output or causes an invalid distance error.
