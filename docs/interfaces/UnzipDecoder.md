[**fflate**](../README.md)

***

# Interface: UnzipDecoder

A decoder for files in ZIP streams

## Properties

### ondata

> **ondata**: [`AsyncFlateStreamHandler`](../type-aliases/AsyncFlateStreamHandler.md)

The handler to call whenever data is available

***

### terminate?

> `optional` **terminate?**: [`AsyncTerminable`](AsyncTerminable.md)

A method to terminate any internal workers used by the stream. Subsequent
calls to push() should silently fail.

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
