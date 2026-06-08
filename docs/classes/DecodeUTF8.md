[**fflate**](../README.md)

***

# Class: DecodeUTF8

Streaming UTF-8 decoding

## Constructors

### Constructor

> **new DecodeUTF8**(`cb?`: [`StringStreamHandler`](../type-aliases/StringStreamHandler.md)): `DecodeUTF8`

Creates a UTF-8 decoding stream

#### Parameters

##### cb?

[`StringStreamHandler`](../type-aliases/StringStreamHandler.md)

The callback to call whenever data is decoded

#### Returns

`DecodeUTF8`

## Properties

### ondata

> **ondata**: [`StringStreamHandler`](../type-aliases/StringStreamHandler.md)

The handler to call whenever data is available

## Methods

### push()

> **push**(`chunk`: `Uint8Array`, `final?`: `boolean`): `void`

Pushes a chunk to be decoded from UTF-8 binary

#### Parameters

##### chunk

`Uint8Array`

The chunk to push

##### final?

`boolean`

Whether this is the last chunk

#### Returns

`void`
