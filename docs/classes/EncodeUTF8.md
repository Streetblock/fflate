[**fflate**](../README.md)

***

# Class: EncodeUTF8

Streaming UTF-8 encoding

## Constructors

### Constructor

> **new EncodeUTF8**(`cb?`: [`FlateStreamHandler`](../type-aliases/FlateStreamHandler.md)): `EncodeUTF8`

Creates a UTF-8 decoding stream

#### Parameters

##### cb?

[`FlateStreamHandler`](../type-aliases/FlateStreamHandler.md)

The callback to call whenever data is encoded

#### Returns

`EncodeUTF8`

## Properties

### ondata

> **ondata**: [`FlateStreamHandler`](../type-aliases/FlateStreamHandler.md)

The handler to call whenever data is available

## Methods

### push()

> **push**(`chunk`: `string`, `final?`: `boolean`): `void`

Pushes a chunk to be encoded to UTF-8

#### Parameters

##### chunk

`string`

The string data to push

##### final?

`boolean`

Whether this is the last chunk

#### Returns

`void`
