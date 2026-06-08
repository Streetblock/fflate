[**fflate**](../README.md)

***

# Function: unzip()

## Call Signature

> **unzip**(`data`: `Uint8Array`, `opts`: [`AsyncUnzipOptions`](../interfaces/AsyncUnzipOptions.md), `cb`: [`UnzipCallback`](../type-aliases/UnzipCallback.md)): [`AsyncTerminable`](../interfaces/AsyncTerminable.md)

Asynchronously decompresses a ZIP archive

### Parameters

#### data

`Uint8Array`

The raw compressed ZIP file

#### opts

[`AsyncUnzipOptions`](../interfaces/AsyncUnzipOptions.md)

The ZIP extraction options

#### cb

[`UnzipCallback`](../type-aliases/UnzipCallback.md)

The callback to call with the decompressed files

### Returns

[`AsyncTerminable`](../interfaces/AsyncTerminable.md)

A function that can be used to immediately terminate the unzipping

## Call Signature

> **unzip**(`data`: `Uint8Array`, `cb`: [`UnzipCallback`](../type-aliases/UnzipCallback.md)): [`AsyncTerminable`](../interfaces/AsyncTerminable.md)

Asynchronously decompresses a ZIP archive

### Parameters

#### data

`Uint8Array`

The raw compressed ZIP file

#### cb

[`UnzipCallback`](../type-aliases/UnzipCallback.md)

The callback to call with the decompressed files

### Returns

[`AsyncTerminable`](../interfaces/AsyncTerminable.md)

A function that can be used to immediately terminate the unzipping
