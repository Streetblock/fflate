[**fflate**](../README.md)

***

# Class: AsyncUnzipInflate

Asynchronous streaming DEFLATE decompression for ZIP archives

## Implements

- [`UnzipDecoder`](../interfaces/UnzipDecoder.md)

## Constructors

### Constructor

> **new AsyncUnzipInflate**(`_`: `string`, `sz?`: `number`): `AsyncUnzipInflate`

Creates a DEFLATE decompression that can be used in ZIP archives

#### Parameters

##### \_

`string`

##### sz?

`number`

#### Returns

`AsyncUnzipInflate`

## Properties

### ondata

> **ondata**: [`AsyncFlateStreamHandler`](../type-aliases/AsyncFlateStreamHandler.md)

The handler to call whenever data is available

#### Implementation of

[`UnzipDecoder`](../interfaces/UnzipDecoder.md).[`ondata`](../interfaces/UnzipDecoder.md#ondata)

***

### terminate

> **terminate**: [`AsyncTerminable`](../interfaces/AsyncTerminable.md)

A method to terminate any internal workers used by the stream. Subsequent
calls to push() should silently fail.

#### Implementation of

[`UnzipDecoder`](../interfaces/UnzipDecoder.md).[`terminate`](../interfaces/UnzipDecoder.md#terminate)

***

### compression

> `static` **compression**: `number` = `8`

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
