[**fflate**](../README.md)

***

# Class: UnzipPassThrough

Streaming pass-through decompression for ZIP archives

## Implements

- [`UnzipDecoder`](../interfaces/UnzipDecoder.md)

## Constructors

### Constructor

> **new UnzipPassThrough**(): `UnzipPassThrough`

#### Returns

`UnzipPassThrough`

## Properties

### ondata

> **ondata**: [`AsyncFlateStreamHandler`](../type-aliases/AsyncFlateStreamHandler.md)

The handler to call whenever data is available

#### Implementation of

[`UnzipDecoder`](../interfaces/UnzipDecoder.md).[`ondata`](../interfaces/UnzipDecoder.md#ondata)

***

### compression

> `static` **compression**: `number` = `0`

## Methods

### push()

> **push**(`chunk`: `Uint8Array`, `final`: `boolean`): `void`

Pushes a chunk to be decompressed

#### Parameters

##### chunk

`Uint8Array`

The data in this chunk. Do not consume (detach) this buffer.

##### final

`boolean`

Whether this is the last chunk in the data stream

#### Returns

`void`

#### Implementation of

[`UnzipDecoder`](../interfaces/UnzipDecoder.md).[`push`](../interfaces/UnzipDecoder.md#push)
