[**fflate**](../README.md)

***

# Type Alias: AsyncFlateDrainHandler

> **AsyncFlateDrainHandler** = (`size`: `number`) => `void`

Handler for the asynchronous completion of (de)compression for a data chunk

## Parameters

### size

`number`

The number of bytes that were processed. This is measured in terms of the input
(i.e. compressed bytes for decompression, uncompressed bytes for compression.)

## Returns

`void`
