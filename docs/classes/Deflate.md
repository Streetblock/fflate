[**fflate**](../README.md)

***

# Class: Deflate

Streaming DEFLATE compression

## Constructors

### Constructor

> **new Deflate**(`opts`: [`DeflateOptions`](../interfaces/DeflateOptions.md), `cb?`: [`FlateStreamHandler`](../type-aliases/FlateStreamHandler.md)): `Deflate`

Creates a DEFLATE stream

#### Parameters

##### opts

[`DeflateOptions`](../interfaces/DeflateOptions.md)

The compression options

##### cb?

[`FlateStreamHandler`](../type-aliases/FlateStreamHandler.md)

The callback to call whenever data is deflated

#### Returns

`Deflate`

### Constructor

> **new Deflate**(`cb?`: [`FlateStreamHandler`](../type-aliases/FlateStreamHandler.md)): `Deflate`

Creates a DEFLATE stream

#### Parameters

##### cb?

[`FlateStreamHandler`](../type-aliases/FlateStreamHandler.md)

The callback to call whenever data is deflated

#### Returns

`Deflate`

## Properties

### ondata

> **ondata**: [`FlateStreamHandler`](../type-aliases/FlateStreamHandler.md)

The handler to call whenever data is available

## Methods

### flush()

> **flush**(`sync?`: `boolean`): `void`

Flushes buffered uncompressed data. Useful to immediately retrieve the
deflated output for small inputs.

#### Parameters

##### sync?

`boolean`

Whether to flush to a byte boundary. A sync flush takes 4-5
            extra bytes, but guarantees all pushed data is immediately
            decompressible. A separate DEFLATE stream may be concatenated
            with the current output after a sync flush.

#### Returns

`void`

***

### push()

> **push**(`chunk`: `Uint8Array`, `final?`: `boolean`): `void`

Pushes a chunk to be deflated

#### Parameters

##### chunk

`Uint8Array`

The chunk to push

##### final?

`boolean`

Whether this is the last chunk

#### Returns

`void`
