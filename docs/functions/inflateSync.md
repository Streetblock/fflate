[**fflate**](../README.md)

***

# Function: inflateSync()

## Call Signature

> **inflateSync**(`data`: `Uint8Array`): `Uint8Array`\<`ArrayBuffer`\>

Expands DEFLATE data with no wrapper

### Parameters

#### data

`Uint8Array`

The data to decompress

### Returns

`Uint8Array`\<`ArrayBuffer`\>

The decompressed version of the data

## Call Signature

> **inflateSync**\<`TArrayBuffer`\>(`data`: `Uint8Array`, `opts?`: [`InflateOptions`](../interfaces/InflateOptions.md)\<`TArrayBuffer`\>): `Uint8Array`\<`TArrayBuffer`\>

Expands DEFLATE data with no wrapper

### Type Parameters

#### TArrayBuffer

`TArrayBuffer` *extends* `ArrayBufferLike` = `ArrayBuffer`

### Parameters

#### data

`Uint8Array`

The data to decompress

#### opts?

[`InflateOptions`](../interfaces/InflateOptions.md)\<`TArrayBuffer`\>

The decompression options

### Returns

`Uint8Array`\<`TArrayBuffer`\>

The decompressed version of the data
