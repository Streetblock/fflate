[**fflate**](../README.md)

***

# Class: Unzip

A ZIP archive decompression stream that emits files as they are discovered

## Constructors

### Constructor

> **new Unzip**(`cb?`: [`UnzipFileHandler`](../type-aliases/UnzipFileHandler.md)): `Unzip`

Creates a ZIP decompression stream

#### Parameters

##### cb?

[`UnzipFileHandler`](../type-aliases/UnzipFileHandler.md)

The callback to call whenever a file in the ZIP archive is found

#### Returns

`Unzip`

## Properties

### onfile

> **onfile**: [`UnzipFileHandler`](../type-aliases/UnzipFileHandler.md)

The handler to call whenever a file is discovered

## Methods

### push()

> **push**(`chunk`: `Uint8Array`, `final?`: `boolean`): `void`

Pushes a chunk to be unzipped

#### Parameters

##### chunk

`Uint8Array`

The chunk to push

##### final?

`boolean`

Whether this is the last chunk

#### Returns

`void`

***

### register()

> **register**(`decoder`: [`UnzipDecoderConstructor`](../interfaces/UnzipDecoderConstructor.md)): `void`

Registers a decoder with the stream, allowing for files compressed with
the compression type provided to be expanded correctly

#### Parameters

##### decoder

[`UnzipDecoderConstructor`](../interfaces/UnzipDecoderConstructor.md)

The decoder constructor

#### Returns

`void`
