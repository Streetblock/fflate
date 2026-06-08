[**fflate**](../README.md)

***

# Interface: UnzipFile

Streaming file extraction from ZIP archives

## Properties

### compression

> **compression**: `number`

The compression format for the data stream. This number is determined by
the spec in PKZIP's APPNOTE.txt, section 4.4.5. For example, 0 = no
compression, 8 = deflate, 14 = LZMA. If start() is called but there is no
decompression stream available for this method, start() will throw.

***

### name

> **name**: `string`

The name of the file

***

### ondata

> **ondata**: [`AsyncFlateStreamHandler`](../type-aliases/AsyncFlateStreamHandler.md)

The handler to call whenever data is available

***

### originalSize?

> `optional` **originalSize?**: `number`

The original size of the file. Will not be present for archives created
in a streaming fashion.

***

### size?

> `optional` **size?**: `number`

The compressed size of the file. Will not be present for archives created
in a streaming fashion.

***

### terminate

> **terminate**: [`AsyncTerminable`](AsyncTerminable.md)

A method to terminate any internal workers used by the stream. ondata
will not be called any further.

## Methods

### start()

> **start**(): `void`

Starts reading from the stream. Calling this function will always enable
this stream, but ocassionally the stream will be enabled even without
this being called.

#### Returns

`void`
