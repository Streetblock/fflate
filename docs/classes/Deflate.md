# Class: Deflate

Streaming DEFLATE compression

## Table of contents

### Constructors

- [constructor](Deflate.md#constructor)

### Properties

- [ondata](Deflate.md#ondata)

### Methods

- [flush](Deflate.md#flush)
- [push](Deflate.md#push)

## Constructors

### constructor

• **new Deflate**(`opts`, `cb?`)

Creates a DEFLATE stream

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | [`DeflateOptions`](../interfaces/DeflateOptions.md) | The compression options |
| `cb?` | [`FlateStreamHandler`](../README.md#flatestreamhandler) | The callback to call whenever data is deflated |

• **new Deflate**(`cb?`)

Creates a DEFLATE stream

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cb?` | [`FlateStreamHandler`](../README.md#flatestreamhandler) | The callback to call whenever data is deflated |

## Properties

### ondata

• **ondata**: [`FlateStreamHandler`](../README.md#flatestreamhandler)

The handler to call whenever data is available

## Methods

### flush

▸ **flush**(`sync?`): `void`

Flushes buffered uncompressed data. Useful to immediately retrieve the
deflated output for small inputs.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sync?` | `boolean` | Whether to flush to a byte boundary. A sync flush takes 4-5 extra bytes, but guarantees all pushed data is immediately decompressible. A separate DEFLATE stream may be concatenated with the current output after a sync flush. |

#### Returns

`void`

___

### push

▸ **push**(`chunk`, `final?`): `void`

Pushes a chunk to be deflated

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chunk` | `Uint8Array` | The chunk to push |
| `final?` | `boolean` | Whether this is the last chunk |

#### Returns

`void`
