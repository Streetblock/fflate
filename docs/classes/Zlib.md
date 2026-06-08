[**fflate**](../README.md)

***

# Class: Zlib

Streaming Zlib compression

## Constructors

### Constructor

> **new Zlib**(`opts`: [`ZlibOptions`](../interfaces/ZlibOptions.md), `cb?`: [`FlateStreamHandler`](../type-aliases/FlateStreamHandler.md)): `Zlib`

Creates a Zlib stream

#### Parameters

##### opts

[`ZlibOptions`](../interfaces/ZlibOptions.md)

The compression options

##### cb?

[`FlateStreamHandler`](../type-aliases/FlateStreamHandler.md)

The callback to call whenever data is deflated

#### Returns

`Zlib`

### Constructor

> **new Zlib**(`cb?`: [`FlateStreamHandler`](../type-aliases/FlateStreamHandler.md)): `Zlib`

Creates a Zlib stream

#### Parameters

##### cb?

[`FlateStreamHandler`](../type-aliases/FlateStreamHandler.md)

The callback to call whenever data is deflated

#### Returns

`Zlib`

## Properties

### ondata

> **ondata**: [`FlateStreamHandler`](../type-aliases/FlateStreamHandler.md)

The handler to call whenever data is available

## Methods

### flush()

> **flush**(`sync?`: `boolean`): `void`

Flushes buffered uncompressed data. Useful to immediately retrieve the
zlibbed output for small inputs.

#### Parameters

##### sync?

`boolean`

Whether to flush to a byte boundary. A sync flush takes 4-5
            extra bytes, but guarantees all pushed data is immediately
            decompressible.

#### Returns

`void`

***

### push()

> **push**(`chunk`: `Uint8Array`, `final?`: `boolean`): `void`

Pushes a chunk to be zlibbed

#### Parameters

##### chunk

`Uint8Array`

The chunk to push

##### final?

`boolean`

Whether this is the last chunk

#### Returns

`void`
