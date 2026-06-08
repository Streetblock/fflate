[**fflate**](../README.md)

***

# Interface: AsyncUnzlibOptions

Options for decompressing Zlib data asynchronously

## Extends

- [`AsyncInflateOptions`](AsyncInflateOptions.md)

## Properties

### consume?

> `optional` **consume?**: `boolean`

Whether or not to "consume" the source data. This will make the typed array/buffer you pass in
unusable but will increase performance and reduce memory usage.

#### Inherited from

[`AsyncInflateOptions`](AsyncInflateOptions.md).[`consume`](AsyncInflateOptions.md#consume)

***

### dictionary?

> `optional` **dictionary?**: `Uint8Array`

The dictionary used to compress the original data. If no dictionary was used during compression, this option has no effect.

Supplying the wrong dictionary during decompression usually yields corrupt output or causes an invalid distance error.

#### Inherited from

[`AsyncInflateOptions`](AsyncInflateOptions.md).[`dictionary`](AsyncInflateOptions.md#dictionary)

***

### size?

> `optional` **size?**: `number`

The original size of the data. Currently, the asynchronous API disallows
writing into a buffer you provide; the best you can do is provide the
size in bytes and be given back a new typed array.

#### Inherited from

[`AsyncInflateOptions`](AsyncInflateOptions.md).[`size`](AsyncInflateOptions.md#size)
