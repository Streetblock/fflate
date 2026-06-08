[**fflate**](../README.md)

***

# Class: Inflate

Streaming DEFLATE decompression

## Constructors

### Constructor

> **new Inflate**(`opts`: [`InflateStreamOptions`](../interfaces/InflateStreamOptions.md), `cb?`: [`FlateStreamHandler`](../type-aliases/FlateStreamHandler.md)): `Inflate`

Creates a DEFLATE decompression stream

#### Parameters

##### opts

[`InflateStreamOptions`](../interfaces/InflateStreamOptions.md)

The decompression options

##### cb?

[`FlateStreamHandler`](../type-aliases/FlateStreamHandler.md)

The callback to call whenever data is inflated

#### Returns

`Inflate`

### Constructor

> **new Inflate**(`cb?`: [`FlateStreamHandler`](../type-aliases/FlateStreamHandler.md)): `Inflate`

Creates a DEFLATE decompression stream

#### Parameters

##### cb?

[`FlateStreamHandler`](../type-aliases/FlateStreamHandler.md)

The callback to call whenever data is inflated

#### Returns

`Inflate`

## Properties

### ondata

> **ondata**: [`FlateStreamHandler`](../type-aliases/FlateStreamHandler.md)

The handler to call whenever data is available

## Methods

### push()

> **push**(`chunk`: `Uint8Array`, `final?`: `boolean`): `void`

Pushes a chunk to be inflated

#### Parameters

##### chunk

`Uint8Array`

The chunk to push

##### final?

`boolean`

Whether this is the final chunk

#### Returns

`void`
