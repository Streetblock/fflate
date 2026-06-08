[**fflate**](../README.md)

***

# Function: gunzip()

## Call Signature

> **gunzip**(`data`: `Uint8Array`, `opts`: [`AsyncGunzipOptions`](../interfaces/AsyncGunzipOptions.md), `cb`: [`FlateCallback`](../type-aliases/FlateCallback.md)): [`AsyncTerminable`](../interfaces/AsyncTerminable.md)

Asynchronously expands GZIP data

### Parameters

#### data

`Uint8Array`

The data to decompress

#### opts

[`AsyncGunzipOptions`](../interfaces/AsyncGunzipOptions.md)

The decompression options

#### cb

[`FlateCallback`](../type-aliases/FlateCallback.md)

The function to be called upon decompression completion

### Returns

[`AsyncTerminable`](../interfaces/AsyncTerminable.md)

A function that can be used to immediately terminate the decompression

## Call Signature

> **gunzip**(`data`: `Uint8Array`, `cb`: [`FlateCallback`](../type-aliases/FlateCallback.md)): [`AsyncTerminable`](../interfaces/AsyncTerminable.md)

Asynchronously expands GZIP data

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
