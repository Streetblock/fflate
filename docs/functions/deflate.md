[**fflate**](../README.md)

***

# Function: deflate()

## Call Signature

> **deflate**(`data`: `Uint8Array`, `opts`: [`AsyncDeflateOptions`](../interfaces/AsyncDeflateOptions.md), `cb`: [`FlateCallback`](../type-aliases/FlateCallback.md)): [`AsyncTerminable`](../interfaces/AsyncTerminable.md)

Asynchronously compresses data with DEFLATE without any wrapper

### Parameters

#### data

`Uint8Array`

The data to compress

#### opts

[`AsyncDeflateOptions`](../interfaces/AsyncDeflateOptions.md)

The compression options

#### cb

[`FlateCallback`](../type-aliases/FlateCallback.md)

The function to be called upon compression completion

### Returns

[`AsyncTerminable`](../interfaces/AsyncTerminable.md)

A function that can be used to immediately terminate the compression

## Call Signature

> **deflate**(`data`: `Uint8Array`, `cb`: [`FlateCallback`](../type-aliases/FlateCallback.md)): [`AsyncTerminable`](../interfaces/AsyncTerminable.md)

Asynchronously compresses data with DEFLATE without any wrapper

### Parameters

#### data

`Uint8Array`

The data to compress

#### cb

[`FlateCallback`](../type-aliases/FlateCallback.md)

The function to be called upon compression completion

### Returns

[`AsyncTerminable`](../interfaces/AsyncTerminable.md)
