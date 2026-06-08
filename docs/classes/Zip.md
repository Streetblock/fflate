[**fflate**](../README.md)

***

# Class: Zip

A zippable archive to which files can incrementally be added

## Constructors

### Constructor

> **new Zip**(`cb?`: [`AsyncFlateStreamHandler`](../type-aliases/AsyncFlateStreamHandler.md)): `Zip`

Creates an empty ZIP archive to which files can be added

#### Parameters

##### cb?

[`AsyncFlateStreamHandler`](../type-aliases/AsyncFlateStreamHandler.md)

The callback to call whenever data for the generated ZIP archive
          is available

#### Returns

`Zip`

## Properties

### ondata

> **ondata**: [`AsyncFlateStreamHandler`](../type-aliases/AsyncFlateStreamHandler.md)

The handler to call whenever data is available

## Methods

### add()

> **add**(`file`: [`ZipInputFile`](../interfaces/ZipInputFile.md)): `void`

Adds a file to the ZIP archive

#### Parameters

##### file

[`ZipInputFile`](../interfaces/ZipInputFile.md)

The file stream to add

#### Returns

`void`

***

### end()

> **end**(): `void`

Ends the process of adding files and prepares to emit the final chunks.
This *must* be called after adding all desired files for the resulting
ZIP file to work properly.

#### Returns

`void`

***

### terminate()

> **terminate**(): `void`

A method to terminate any internal workers used by the stream. Subsequent
calls to add() will fail.

#### Returns

`void`
