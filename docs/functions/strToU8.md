[**fflate**](../README.md)

***

# Function: strToU8()

> **strToU8**(`str`: `string`, `latin1?`: `boolean`): `Uint8Array`\<`ArrayBuffer`\>

Converts a string into a Uint8Array for use with compression/decompression methods

## Parameters

### str

`string`

The string to encode

### latin1?

`boolean`

Whether or not to interpret the data as Latin-1. This should
              not need to be true unless decoding a binary string.

## Returns

`Uint8Array`\<`ArrayBuffer`\>

The string encoded in UTF-8/Latin-1 binary
