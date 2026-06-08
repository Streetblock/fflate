[**fflate**](../README.md)

***

# Function: strFromU8()

> **strFromU8**(`dat`: `Uint8Array`, `latin1?`: `boolean`): `string`

Converts a Uint8Array to a string

## Parameters

### dat

`Uint8Array`

The data to decode to string

### latin1?

`boolean`

Whether or not to interpret the data as Latin-1. This should
              not need to be true unless encoding to binary string.

## Returns

`string`

The original UTF-8/Latin-1 string
