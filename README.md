# metalsmith-path

Adds 'path' property to each file's metadata, which can be used as a URL.

## Installation

```
$ npm i -S metalsmith-path
```

## CLI Usage

Install via npm and then add the `metalsmith-path` key to your `metalsmith.json`
plugins, like so:

```json
{
  "plugins": {
    "metalsmith-path": true
  }
}
```

## Javascript Usage

Pass the plugin to `Metalsmith#use`:

```js
const path = require('metalsmith-path')
metalsmith.use(path({ /* options */ }))
```

## Available options

### `property`

The name of the property (key) where the path will be stored.  Default: `path`.

Example:

```js
metalsmith.use(path({ property: 'urlPath' }))
```

### `baseDirectory`

The `baseDirectory` of the site, useful for generating absolute paths.  Default:
empty.

Example:

```js
metalsmith.use(path({ baseDirectory: '/' }))
```

### `directoryIndex`

If a `directoryIndex` is supplied, it will be stripped from the path.  Default:
disabled.

Example:

```js
metalsmith.use(path({ directoryIndex: '/index.html' }))
```

This creates URLs such as `/blog` instead of `/blog/index.html`.

### `extensions`

If the file's extension isn't found in the provided array then it will be
ignored by the plugin.  Default: `['.html']`

Example:

```js
metalsmith.use(path({ extensions: ['.html', '.pdf', '.jpg'] }))
```

## License

WTFPL
