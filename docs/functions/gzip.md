[**fflate**](../README.md)

***

# Function: gzip()

## Call Signature

> **gzip**(`data`: `Uint8Array`, `opts`: [`AsyncGzipOptions`](../interfaces/AsyncGzipOptions.md), `cb`: [`FlateCallback`](../type-aliases/FlateCallback.md)): [`AsyncTerminable`](../interfaces/AsyncTerminable.md)

Asynchronously compresses data with GZIP

### Parameters

#### data

`Uint8Array`

The data to compress

#### opts

[`AsyncGzipOptions`](../interfaces/AsyncGzipOptions.md)

The compression options

#### cb

[`FlateCallback`](../type-aliases/FlateCallback.md)

The function to be called upon compression completion

### Returns

[`AsyncTerminable`](../interfaces/AsyncTerminable.md)

A function that can be used to immediately terminate the compression

## Call Signature

> **gzip**(`data`: `Uint8Array`, `cb`: [`FlateCallback`](../type-aliases/FlateCallback.md)): [`AsyncTerminable`](../interfaces/AsyncTerminable.md)

Asynchronously compresses data with GZIP

### Parameters

#### data

`Uint8Array`

The data to compress

#### cb

[`FlateCallback`](../type-aliases/FlateCallback.md)

The function to be called upon compression completion

### Returns

[`AsyncTerminable`](../interfaces/AsyncTerminable.md)

A function that can be used to immediately terminate the decompression
