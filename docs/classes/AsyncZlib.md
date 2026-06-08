[**fflate**](../README.md)

***

# Class: AsyncZlib

Asynchronous streaming Zlib compression

## Constructors

### Constructor

> **new AsyncZlib**(`opts`: [`ZlibOptions`](../interfaces/ZlibOptions.md), `cb?`: [`AsyncFlateStreamHandler`](../type-aliases/AsyncFlateStreamHandler.md)): `AsyncZlib`

Creates an asynchronous Zlib stream

#### Parameters

##### opts

[`ZlibOptions`](../interfaces/ZlibOptions.md)

The compression options

##### cb?

[`AsyncFlateStreamHandler`](../type-aliases/AsyncFlateStreamHandler.md)

The callback to call whenever data is deflated

#### Returns

`AsyncZlib`

### Constructor

> **new AsyncZlib**(`cb?`: [`AsyncFlateStreamHandler`](../type-aliases/AsyncFlateStreamHandler.md)): `AsyncZlib`

Creates an asynchronous Zlib stream

#### Parameters

##### cb?

[`AsyncFlateStreamHandler`](../type-aliases/AsyncFlateStreamHandler.md)

The callback to call whenever data is deflated

#### Returns

`AsyncZlib`

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
