[**fflate**](../README.md)

***

# Function: zipSync()

> **zipSync**(`data`: [`Zippable`](../interfaces/Zippable.md), `opts?`: [`ZipOptions`](../interfaces/ZipOptions.md)): `Uint8Array`\<`ArrayBuffer`\>

Synchronously creates a ZIP file. Prefer using `zip` for better performance
with more than one file.

## Parameters

### data

[`Zippable`](../interfaces/Zippable.md)

The directory structure for the ZIP archive

### opts?

[`ZipOptions`](../interfaces/ZipOptions.md)

The main options, merged with per-file options

## Returns

`Uint8Array`\<`ArrayBuffer`\>

The generated ZIP archive
