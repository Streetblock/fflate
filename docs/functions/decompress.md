[**fflate**](../README.md)

***

# Function: decompress()

## Call Signature

> **decompress**(`data`: `Uint8Array`, `opts`: [`AsyncInflateOptions`](../interfaces/AsyncInflateOptions.md), `cb`: [`FlateCallback`](../type-aliases/FlateCallback.md)): [`AsyncTerminable`](../interfaces/AsyncTerminable.md)

Asynchrononously expands compressed GZIP, Zlib, or raw DEFLATE data, automatically detecting the format

### Parameters

#### data

`Uint8Array`

The data to decompress

#### opts

[`AsyncInflateOptions`](../interfaces/AsyncInflateOptions.md)

The decompression options

#### cb

[`FlateCallback`](../type-aliases/FlateCallback.md)

The function to be called upon decompression completion

### Returns

[`AsyncTerminable`](../interfaces/AsyncTerminable.md)

A function that can be used to immediately terminate the decompression

## Call Signature

> **decompress**(`data`: `Uint8Array`, `cb`: [`FlateCallback`](../type-aliases/FlateCallback.md)): [`AsyncTerminable`](../interfaces/AsyncTerminable.md)

Asynchrononously expands compressed GZIP, Zlib, or raw DEFLATE data, automatically detecting the format

### Parameters

#### data

`Uint8Array`

The data to decompress

#### cb

[`FlateCallback`](../type-aliases/FlateCallback.md)

The function to be called upon decompression completion

### Returns

[`AsyncTerminable`](../interfaces/AsyncTerminable.md)

A function that can be used to immediately terminate the decompression
