[**fflate**](../README.md)

***

# Function: unzlib()

## Call Signature

> **unzlib**(`data`: `Uint8Array`, `opts`: [`AsyncUnzlibOptions`](../interfaces/AsyncUnzlibOptions.md), `cb`: [`FlateCallback`](../type-aliases/FlateCallback.md)): [`AsyncTerminable`](../interfaces/AsyncTerminable.md)

Asynchronously expands Zlib data

### Parameters

#### data

`Uint8Array`

The data to decompress

#### opts

[`AsyncUnzlibOptions`](../interfaces/AsyncUnzlibOptions.md)

The decompression options

#### cb

[`FlateCallback`](../type-aliases/FlateCallback.md)

The function to be called upon decompression completion

### Returns

[`AsyncTerminable`](../interfaces/AsyncTerminable.md)

A function that can be used to immediately terminate the decompression

## Call Signature

> **unzlib**(`data`: `Uint8Array`, `cb`: [`FlateCallback`](../type-aliases/FlateCallback.md)): [`AsyncTerminable`](../interfaces/AsyncTerminable.md)

Asynchronously expands Zlib data

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
