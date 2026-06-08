[**fflate**](../README.md)

***

# Function: zlib()

## Call Signature

> **zlib**(`data`: `Uint8Array`, `opts`: [`AsyncZlibOptions`](../interfaces/AsyncZlibOptions.md), `cb`: [`FlateCallback`](../type-aliases/FlateCallback.md)): [`AsyncTerminable`](../interfaces/AsyncTerminable.md)

Asynchronously compresses data with Zlib

### Parameters

#### data

`Uint8Array`

The data to compress

#### opts

[`AsyncZlibOptions`](../interfaces/AsyncZlibOptions.md)

The compression options

#### cb

[`FlateCallback`](../type-aliases/FlateCallback.md)

The function to be called upon compression completion

### Returns

[`AsyncTerminable`](../interfaces/AsyncTerminable.md)

## Call Signature

> **zlib**(`data`: `Uint8Array`, `cb`: [`FlateCallback`](../type-aliases/FlateCallback.md)): [`AsyncTerminable`](../interfaces/AsyncTerminable.md)

Asynchronously compresses data with Zlib

### Parameters

#### data

`Uint8Array`

The data to compress

#### cb

[`FlateCallback`](../type-aliases/FlateCallback.md)

The function to be called upon compression completion

### Returns

[`AsyncTerminable`](../interfaces/AsyncTerminable.md)

A function that can be used to immediately terminate the compression
