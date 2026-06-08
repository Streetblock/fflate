[**fflate**](../README.md)

***

# Class: Gzip

Streaming GZIP compression

## Constructors

### Constructor

> **new Gzip**(`opts`: [`GzipOptions`](../interfaces/GzipOptions.md), `cb?`: [`FlateStreamHandler`](../type-aliases/FlateStreamHandler.md)): `Gzip`

Creates a GZIP stream

#### Parameters

##### opts

[`GzipOptions`](../interfaces/GzipOptions.md)

The compression options

##### cb?

[`FlateStreamHandler`](../type-aliases/FlateStreamHandler.md)

The callback to call whenever data is deflated

#### Returns

`Gzip`

### Constructor

> **new Gzip**(`cb?`: [`FlateStreamHandler`](../type-aliases/FlateStreamHandler.md)): `Gzip`

Creates a GZIP stream

#### Parameters

##### cb?

[`FlateStreamHandler`](../type-aliases/FlateStreamHandler.md)

The callback to call whenever data is deflated

#### Returns

`Gzip`

## Properties

### ondata

> **ondata**: [`FlateStreamHandler`](../type-aliases/FlateStreamHandler.md)

The handler to call whenever data is available

## Methods

### flush()

> **flush**(`sync?`: `boolean`): `void`

Flushes buffered uncompressed data. Useful to immediately retrieve the
GZIPped output for small inputs.

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

Pushes a chunk to be GZIPped

#### Parameters

##### chunk

`Uint8Array`

The chunk to push

##### final?

`boolean`

Whether this is the last chunk

#### Returns

`void`
