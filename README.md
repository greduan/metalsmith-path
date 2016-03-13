# metalsmith-path

Adds 'path' property to each file's metadata, which can be used as a URL.

## Installation

```
$ npm install metalsmith-path
```

## CLI Usage

Install via npm and then add the `metalsmith-path` key to your `metalsmith.json` plugins, like so:

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
var path = require('metalsmith-path');
metalsmith.use(path({ /* options */ }));
```

## Available options

### property

The name of the property (key) where the path will be stored. Default: `path`.

### baseDirectory

The base directory of the site, useful for generating absolute paths. Default: empty.

Example:

    metalsmith.use(path({ baseDirectory : "/" })); 

### directoryIndex

If a directoryIndex is supplied, it will be stripped from the path. Default: disabled.

    metalsmith.use(path({ directoryIndex : "index.html" })); 

This creates URLs such as `/blog/` instead of `/blog/index.html`.

## License

WTFPL
