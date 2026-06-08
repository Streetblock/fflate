[**fflate**](../README.md)

***

# Function: unzipSync()

> **unzipSync**(`data`: `Uint8Array`, `opts?`: [`UnzipOptions`](../interfaces/UnzipOptions.md)): [`Unzipped`](../interfaces/Unzipped.md)

Synchronously decompresses a ZIP archive. Prefer using `unzip` for better
performance with more than one file.

## Parameters

### data

`Uint8Array`

The raw compressed ZIP file

### opts?

[`UnzipOptions`](../interfaces/UnzipOptions.md)

The ZIP extraction options

## Returns

[`Unzipped`](../interfaces/Unzipped.md)

The decompressed files
