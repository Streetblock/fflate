[**fflate**](../README.md)

***

# Class: AsyncDeflate

Asynchronous streaming DEFLATE compression

## Constructors

### Constructor

> **new AsyncDeflate**(`opts`: [`DeflateOptions`](../interfaces/DeflateOptions.md), `cb?`: [`AsyncFlateStreamHandler`](../type-aliases/AsyncFlateStreamHandler.md)): `AsyncDeflate`

Creates an asynchronous DEFLATE stream

#### Parameters

##### opts

[`DeflateOptions`](../interfaces/DeflateOptions.md)

The compression options

##### cb?

[`AsyncFlateStreamHandler`](../type-aliases/AsyncFlateStreamHandler.md)

The callback to call whenever data is deflated

#### Returns

`AsyncDeflate`

### Constructor

> **new AsyncDeflate**(`cb?`: [`AsyncFlateStreamHandler`](../type-aliases/AsyncFlateStreamHandler.md)): `AsyncDeflate`

Creates an asynchronous DEFLATE stream

#### Parameters

##### cb?

[`AsyncFlateStreamHandler`](../type-aliases/AsyncFlateStreamHandler.md)

The callback to call whenever data is deflated

#### Returns

`AsyncDeflate`

## Properties

### ondata

> **ondata**: [`AsyncFlateStreamHandler`](../type-aliases/AsyncFlateStreamHandler.md)

The handler to call whenever data is available

***

### ondrain?

> `optional` **ondrain?**: [`AsyncFlateDrainHandler`](../type-aliases/AsyncFlateDrainHandler.md)

The handler to call whenever buffered source data is processed (i.e. `queuedSize` updates)

***

### queuedSize

> **queuedSize**: `number`

The number of uncompressed bytes buffered in the stream

***

### terminate

> **terminate**: [`AsyncTerminable`](../interfaces/AsyncTerminable.md)

A method to terminate the stream's internal worker. Subsequent calls to
push() will silently fail.

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
