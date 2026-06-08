[**fflate**](../README.md)

***

# Class: AsyncGunzip

Asynchronous streaming single or multi-member GZIP decompression

## Constructors

### Constructor

> **new AsyncGunzip**(`opts`: [`GunzipStreamOptions`](../interfaces/GunzipStreamOptions.md), `cb?`: [`AsyncFlateStreamHandler`](../type-aliases/AsyncFlateStreamHandler.md)): `AsyncGunzip`

Creates an asynchronous GUNZIP stream

#### Parameters

##### opts

[`GunzipStreamOptions`](../interfaces/GunzipStreamOptions.md)

The decompression options

##### cb?

[`AsyncFlateStreamHandler`](../type-aliases/AsyncFlateStreamHandler.md)

The callback to call whenever data is inflated

#### Returns

`AsyncGunzip`

### Constructor

> **new AsyncGunzip**(`cb?`: [`AsyncFlateStreamHandler`](../type-aliases/AsyncFlateStreamHandler.md)): `AsyncGunzip`

Creates an asynchronous GUNZIP stream

#### Parameters

##### cb?

[`AsyncFlateStreamHandler`](../type-aliases/AsyncFlateStreamHandler.md)

The callback to call whenever data is inflated

#### Returns

`AsyncGunzip`

## Properties

### ondata

> **ondata**: [`AsyncFlateStreamHandler`](../type-aliases/AsyncFlateStreamHandler.md)

The handler to call whenever data is available

***

### ondrain?

> `optional` **ondrain?**: [`AsyncFlateDrainHandler`](../type-aliases/AsyncFlateDrainHandler.md)

The handler to call whenever buffered source data is processed (i.e. `queuedSize` updates)

***

### onmember?

> `optional` **onmember?**: [`GunzipMemberHandler`](../type-aliases/GunzipMemberHandler.md)

The handler to call whenever a new GZIP member is found

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

Pushes a chunk to be GUNZIPped

#### Parameters

##### chunk

`Uint8Array`

The chunk to push

##### final?

`boolean`

Whether this is the last chunk

#### Returns

`void`
