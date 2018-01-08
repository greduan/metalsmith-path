const path = require('path')

module.exports = ({
  property = 'path',
  baseDirectory = '',
  directoryIndex = false,
  extensions = ['.html'],
} = {}) => (files, _, done) => {
  setImmediate(done)

  Object.keys(files).forEach(file => {
    if (extensions.indexOf(path.extname(file)) === -1) {
      return
    }

    let url = baseDirectory + file

    if (directoryIndex && path.basename(url) === directoryIndex) {
      url = path.dirname(url) + '/'
    }

    files[file][property] = url === '.' ? '' : url
  })
}
