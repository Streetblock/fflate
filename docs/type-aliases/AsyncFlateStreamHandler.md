[**fflate**](../README.md)

***

# Type Alias: AsyncFlateStreamHandler

> **AsyncFlateStreamHandler** = (`err`: [`FlateError`](../interfaces/FlateError.md) \| `null`, `data`: `Uint8Array`\<`ArrayBuffer`\>, `final`: `boolean`) => `void`

Handler for asynchronous data (de)compression streams

## Parameters

### err

[`FlateError`](../interfaces/FlateError.md) \| `null`

Any error that occurred

### data

`Uint8Array`\<`ArrayBuffer`\>

The data output from the stream processor

### final

`boolean`

Whether this is the final block

## Returns

`void`
