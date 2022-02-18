const vm = require('vm')
const fs = require('fs')
const path = require('path')

const outputDir = path.resolve('./dist')
const appPath = path.resolve(outputDir, 'index.js')
const context = {
  __dirname: outputDir,
  __filename: appPath,
  console: {
    log: () => {},
  },
  module: { exports: {} },
  require,
}
context.exports = context.module.exports
const code = fs.readFileSync(appPath, { encoding: 'utf-8' })

vm.createContext(context)
vm.runInContext(code, context, { filename: appPath, displayErrors: true })
