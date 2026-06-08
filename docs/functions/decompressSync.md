[**fflate**](../README.md)

***

# Function: decompressSync()

> **decompressSync**(`data`: `Uint8Array`, `opts?`: [`InflateOptions`](../interfaces/InflateOptions.md)): `Uint8Array`\<`ArrayBufferLike`\>

Expands compressed GZIP, Zlib, or raw DEFLATE data, automatically detecting the format

## Parameters

### data

`Uint8Array`

The data to decompress

### opts?

[`InflateOptions`](../interfaces/InflateOptions.md)

The decompression options

## Returns

`Uint8Array`\<`ArrayBufferLike`\>

The decompressed version of the data
