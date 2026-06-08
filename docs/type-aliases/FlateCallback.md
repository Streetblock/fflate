[**fflate**](../README.md)

***

# Type Alias: FlateCallback

> **FlateCallback** = (`err`: [`FlateError`](../interfaces/FlateError.md) \| `null`, `data`: `Uint8Array`\<`ArrayBuffer`\>) => `void`

Callback for asynchronous (de)compression methods

## Parameters

### err

[`FlateError`](../interfaces/FlateError.md) \| `null`

Any error that occurred

### data

`Uint8Array`\<`ArrayBuffer`\>

The resulting data. Only present if `err` is null

## Returns

`void`
