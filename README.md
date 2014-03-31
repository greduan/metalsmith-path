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

metalsmith.use(path());
```

## License

WTFPL
