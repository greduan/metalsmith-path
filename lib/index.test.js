import test from 'ava'
import plugin from './index.js'

const generateFiles = (key, props = {}) => {
  const obj = {}
  obj[key] = props
  return obj
}

test.cb('nothing to be done', t => {
  const name = 'src/my-file.html'
  const files = generateFiles(name)

  const metalsmithPath = plugin()
  metalsmithPath(files, null, () => {
    t.is(files[name].path, 'src/my-file.html')
    t.end()
  })
})

test.cb('baseDirectory is used', t => {
  const name = 'src/my-file.html'
  const files = generateFiles(name)

  const metalsmithPath = plugin({ baseDirectory: 'foo' })
  metalsmithPath(files, null, () => {
    t.is(files[name].path, 'foosrc/my-file.html')
    t.end()
  })
})

test.cb('property is used', t => {
  const name = 'src/my-file.html'
  const files = generateFiles(name)

  const metalsmithPath = plugin({ property: 'foo' })
  metalsmithPath(files, null, () => {
    t.is(files[name].path, undefined)
    t.is(files[name].foo, 'src/my-file.html')
    t.end()
  })
})

test.cb('directoryIndex is used', t => {
  throw `I'm not sure how this is supposed to work, so I can't test it.  Pull request is appreciated!`
})

test.cb('extensions is used', t => {
  const pdfName = 'src/my-file.pdf'
  const pdfFiles = generateFiles(pdfName)
  const htmlName = 'src/my-file.html'
  const htmlFiles = generateFiles(htmlName)

  const metalsmithPath = plugin({ extensions: ['.pdf'] })
  metalsmithPath(pdfFiles, null, () => {
    t.is(pdfFiles[pdfName].path, 'src/my-file.pdf')

    metalsmithPath(htmlFiles, null, () => {
      t.is(htmlFiles[htmlName].path, undefined)
      t.end()
    })
  })
})
