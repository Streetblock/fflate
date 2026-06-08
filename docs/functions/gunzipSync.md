[**fflate**](../README.md)

***

# Function: gunzipSync()

## Call Signature

> **gunzipSync**(`data`: `Uint8Array`): `Uint8Array`\<`ArrayBuffer`\>

Expands GZIP data

### Parameters

#### data

`Uint8Array`

The data to decompress

### Returns

`Uint8Array`\<`ArrayBuffer`\>

The decompressed version of the data

## Call Signature

> **gunzipSync**\<`TArrayBuffer`\>(`data`: `Uint8Array`, `opts?`: [`GunzipOptions`](../interfaces/GunzipOptions.md)\<`TArrayBuffer`\>): `Uint8Array`\<`TArrayBuffer`\>

Expands GZIP data

### Type Parameters

#### TArrayBuffer

`TArrayBuffer` *extends* `ArrayBufferLike` = `ArrayBuffer`

### Parameters

#### data

`Uint8Array`

The data to decompress

#### opts?

[`GunzipOptions`](../interfaces/GunzipOptions.md)\<`TArrayBuffer`\>

The decompression options

### Returns

`Uint8Array`\<`TArrayBuffer`\>

The decompressed version of the data
