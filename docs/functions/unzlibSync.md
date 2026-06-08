[**fflate**](../README.md)

***

# Function: unzlibSync()

## Call Signature

> **unzlibSync**(`data`: `Uint8Array`): `Uint8Array`\<`ArrayBuffer`\>

Expands Zlib data

### Parameters

#### data

`Uint8Array`

The data to decompress

### Returns

`Uint8Array`\<`ArrayBuffer`\>

The decompressed version of the data

## Call Signature

> **unzlibSync**\<`TArrayBuffer`\>(`data`: `Uint8Array`, `opts?`: [`UnzlibOptions`](../interfaces/UnzlibOptions.md)\<`TArrayBuffer`\>): `Uint8Array`\<`TArrayBuffer`\>

Expands Zlib data

### Type Parameters

#### TArrayBuffer

`TArrayBuffer` *extends* `ArrayBufferLike` = `ArrayBuffer`

### Parameters

#### data

`Uint8Array`

The data to decompress

#### opts?

[`UnzlibOptions`](../interfaces/UnzlibOptions.md)\<`TArrayBuffer`\>

The decompression options

### Returns

`Uint8Array`\<`TArrayBuffer`\>

The decompressed version of the data
