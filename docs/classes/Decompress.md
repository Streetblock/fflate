[**fflate**](../README.md)

***

# Class: Decompress

Streaming GZIP, Zlib, or raw DEFLATE decompression

## Constructors

### Constructor

> **new Decompress**(`opts`: [`InflateStreamOptions`](../interfaces/InflateStreamOptions.md), `cb?`: [`FlateStreamHandler`](../type-aliases/FlateStreamHandler.md)): `Decompress`

Creates a decompression stream

#### Parameters

##### opts

[`InflateStreamOptions`](../interfaces/InflateStreamOptions.md)

The decompression options

##### cb?

[`FlateStreamHandler`](../type-aliases/FlateStreamHandler.md)

The callback to call whenever data is decompressed

#### Returns

`Decompress`

### Constructor

> **new Decompress**(`cb?`: [`FlateStreamHandler`](../type-aliases/FlateStreamHandler.md)): `Decompress`

Creates a decompression stream

#### Parameters

##### cb?

[`FlateStreamHandler`](../type-aliases/FlateStreamHandler.md)

The callback to call whenever data is decompressed

#### Returns

`Decompress`

## Properties

### ondata

> **ondata**: [`FlateStreamHandler`](../type-aliases/FlateStreamHandler.md)

The handler to call whenever data is available

## Methods

### push()

> **push**(`chunk`: `Uint8Array`, `final?`: `boolean`): `void`

Pushes a chunk to be decompressed

#### Parameters

##### chunk

`Uint8Array`

The chunk to push

##### final?

`boolean`

Whether this is the last chunk

#### Returns

`void`
