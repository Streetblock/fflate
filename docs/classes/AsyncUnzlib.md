[**fflate**](../README.md)

***

# Class: AsyncUnzlib

Asynchronous streaming Zlib decompression

## Constructors

### Constructor

> **new AsyncUnzlib**(`opts`: [`UnzlibStreamOptions`](../interfaces/UnzlibStreamOptions.md), `cb?`: [`AsyncFlateStreamHandler`](../type-aliases/AsyncFlateStreamHandler.md)): `AsyncUnzlib`

Creates an asynchronous Zlib decompression stream

#### Parameters

##### opts

[`UnzlibStreamOptions`](../interfaces/UnzlibStreamOptions.md)

The decompression options

##### cb?

[`AsyncFlateStreamHandler`](../type-aliases/AsyncFlateStreamHandler.md)

The callback to call whenever data is inflated

#### Returns

`AsyncUnzlib`

### Constructor

> **new AsyncUnzlib**(`cb?`: [`AsyncFlateStreamHandler`](../type-aliases/AsyncFlateStreamHandler.md)): `AsyncUnzlib`

Creates an asynchronous Zlib decompression stream

#### Parameters

##### cb?

[`AsyncFlateStreamHandler`](../type-aliases/AsyncFlateStreamHandler.md)

The callback to call whenever data is inflated

#### Returns

`AsyncUnzlib`

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

The number of compressed bytes buffered in the stream

***

### terminate

> **terminate**: [`AsyncTerminable`](../interfaces/AsyncTerminable.md)

A method to terminate the stream's internal worker. Subsequent calls to
push() will silently fail.

## Methods

### push()

> **push**(`chunk`: `Uint8Array`, `final?`: `boolean`): `void`

Pushes a chunk to be decompressed from Zlib

#### Parameters

##### chunk

`Uint8Array`

The chunk to push

##### final?

`boolean`

Whether this is the last chunk

#### Returns

`void`
