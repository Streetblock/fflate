[**fflate**](../README.md)

***

# Class: AsyncInflate

Asynchronous streaming DEFLATE decompression

## Constructors

### Constructor

> **new AsyncInflate**(`opts`: [`InflateStreamOptions`](../interfaces/InflateStreamOptions.md), `cb?`: [`AsyncFlateStreamHandler`](../type-aliases/AsyncFlateStreamHandler.md)): `AsyncInflate`

Creates an asynchronous DEFLATE decompression stream

#### Parameters

##### opts

[`InflateStreamOptions`](../interfaces/InflateStreamOptions.md)

The decompression options

##### cb?

[`AsyncFlateStreamHandler`](../type-aliases/AsyncFlateStreamHandler.md)

The callback to call whenever data is inflated

#### Returns

`AsyncInflate`

### Constructor

> **new AsyncInflate**(`cb?`: [`AsyncFlateStreamHandler`](../type-aliases/AsyncFlateStreamHandler.md)): `AsyncInflate`

Creates an asynchronous DEFLATE decompression stream

#### Parameters

##### cb?

[`AsyncFlateStreamHandler`](../type-aliases/AsyncFlateStreamHandler.md)

The callback to call whenever data is inflated

#### Returns

`AsyncInflate`

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

Pushes a chunk to be inflated

#### Parameters

##### chunk

`Uint8Array`

The chunk to push

##### final?

`boolean`

Whether this is the last chunk

#### Returns

`void`
