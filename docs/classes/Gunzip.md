[**fflate**](../README.md)

***

# Class: Gunzip

Streaming single or multi-member GZIP decompression

## Constructors

### Constructor

> **new Gunzip**(`opts`: [`GunzipStreamOptions`](../interfaces/GunzipStreamOptions.md), `cb?`: [`FlateStreamHandler`](../type-aliases/FlateStreamHandler.md)): `Gunzip`

Creates a GUNZIP stream

#### Parameters

##### opts

[`GunzipStreamOptions`](../interfaces/GunzipStreamOptions.md)

The decompression options

##### cb?

[`FlateStreamHandler`](../type-aliases/FlateStreamHandler.md)

The callback to call whenever data is inflated

#### Returns

`Gunzip`

### Constructor

> **new Gunzip**(`cb?`: [`FlateStreamHandler`](../type-aliases/FlateStreamHandler.md)): `Gunzip`

Creates a GUNZIP stream

#### Parameters

##### cb?

[`FlateStreamHandler`](../type-aliases/FlateStreamHandler.md)

The callback to call whenever data is inflated

#### Returns

`Gunzip`

## Properties

### ondata

> **ondata**: [`FlateStreamHandler`](../type-aliases/FlateStreamHandler.md)

The handler to call whenever data is available

***

### onmember?

> `optional` **onmember?**: [`GunzipMemberHandler`](../type-aliases/GunzipMemberHandler.md)

The handler to call whenever a new GZIP member is found

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
