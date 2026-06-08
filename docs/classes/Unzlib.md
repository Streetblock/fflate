[**fflate**](../README.md)

***

# Class: Unzlib

Streaming Zlib decompression

## Constructors

### Constructor

> **new Unzlib**(`opts`: [`UnzlibStreamOptions`](../interfaces/UnzlibStreamOptions.md), `cb?`: [`FlateStreamHandler`](../type-aliases/FlateStreamHandler.md)): `Unzlib`

Creates a Zlib decompression stream

#### Parameters

##### opts

[`UnzlibStreamOptions`](../interfaces/UnzlibStreamOptions.md)

The decompression options

##### cb?

[`FlateStreamHandler`](../type-aliases/FlateStreamHandler.md)

The callback to call whenever data is inflated

#### Returns

`Unzlib`

### Constructor

> **new Unzlib**(`cb?`: [`FlateStreamHandler`](../type-aliases/FlateStreamHandler.md)): `Unzlib`

Creates a Zlib decompression stream

#### Parameters

##### cb?

[`FlateStreamHandler`](../type-aliases/FlateStreamHandler.md)

The callback to call whenever data is inflated

#### Returns

`Unzlib`

## Properties

### ondata

> **ondata**: [`FlateStreamHandler`](../type-aliases/FlateStreamHandler.md)

The handler to call whenever data is available

## Methods

### push()

> **push**(`chunk`: `Uint8Array`, `final?`: `boolean`): `void`

Pushes a chunk to be unzlibbed

#### Parameters

##### chunk

`Uint8Array`

The chunk to push

##### final?

`boolean`

Whether this is the last chunk

#### Returns

`void`
