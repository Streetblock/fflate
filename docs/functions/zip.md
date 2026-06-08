[**fflate**](../README.md)

***

# Function: zip()

## Call Signature

> **zip**(`data`: [`AsyncZippable`](../interfaces/AsyncZippable.md), `opts`: [`AsyncZipOptions`](../interfaces/AsyncZipOptions.md), `cb`: [`FlateCallback`](../type-aliases/FlateCallback.md)): [`AsyncTerminable`](../interfaces/AsyncTerminable.md)

Asynchronously creates a ZIP file

### Parameters

#### data

[`AsyncZippable`](../interfaces/AsyncZippable.md)

The directory structure for the ZIP archive

#### opts

[`AsyncZipOptions`](../interfaces/AsyncZipOptions.md)

The main options, merged with per-file options

#### cb

[`FlateCallback`](../type-aliases/FlateCallback.md)

The callback to call with the generated ZIP archive

### Returns

[`AsyncTerminable`](../interfaces/AsyncTerminable.md)

A function that can be used to immediately terminate the compression

## Call Signature

> **zip**(`data`: [`AsyncZippable`](../interfaces/AsyncZippable.md), `cb`: [`FlateCallback`](../type-aliases/FlateCallback.md)): [`AsyncTerminable`](../interfaces/AsyncTerminable.md)

Asynchronously creates a ZIP file

### Parameters

#### data

[`AsyncZippable`](../interfaces/AsyncZippable.md)

The directory structure for the ZIP archive

#### cb

[`FlateCallback`](../type-aliases/FlateCallback.md)

The callback to call with the generated ZIP archive

### Returns

[`AsyncTerminable`](../interfaces/AsyncTerminable.md)

A function that can be used to immediately terminate the compression
