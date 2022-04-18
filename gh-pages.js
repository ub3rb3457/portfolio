const fs = require('fs-extra')

const source = './docs/.vitepress/dist'
const dest = './docs-site'

fs.moveSync(source, dest, { overwrite: true })

console.log(source + ' files successfully moved to ' + dest)
