[**fflate**](../README.md)

***

# Class: AsyncDecompress

Asynchronous streaming GZIP, Zlib, or raw DEFLATE decompression

## Constructors

### Constructor

> **new AsyncDecompress**(`opts`: [`InflateStreamOptions`](../interfaces/InflateStreamOptions.md), `cb?`: [`AsyncFlateStreamHandler`](../type-aliases/AsyncFlateStreamHandler.md)): `AsyncDecompress`

Creates an asynchronous decompression stream

#### Parameters

##### opts

[`InflateStreamOptions`](../interfaces/InflateStreamOptions.md)

The decompression options

##### cb?

[`AsyncFlateStreamHandler`](../type-aliases/AsyncFlateStreamHandler.md)

The callback to call whenever data is decompressed

#### Returns

`AsyncDecompress`

### Constructor

> **new AsyncDecompress**(`cb?`: [`AsyncFlateStreamHandler`](../type-aliases/AsyncFlateStreamHandler.md)): `AsyncDecompress`

Creates an asynchronous decompression stream

#### Parameters

##### cb?

[`AsyncFlateStreamHandler`](../type-aliases/AsyncFlateStreamHandler.md)

The callback to call whenever data is decompressed

#### Returns

`AsyncDecompress`

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
