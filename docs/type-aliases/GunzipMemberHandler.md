[**fflate**](../README.md)

***

# Type Alias: GunzipMemberHandler

> **GunzipMemberHandler** = (`offset`: `number`) => `void`

Handler for new GZIP members in concatenated GZIP streams. Useful for building indices used to perform random-access reads on compressed files.

## Parameters

### offset

`number`

The offset of the new member relative to the start of the stream

## Returns

`void`
