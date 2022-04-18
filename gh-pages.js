const fs = require('fs-extra')

const source = './docs/.vitepress/dist'
const dest = './gh-pages'

fs.copySync(source, dest)
// fs.moveSync(source, dest, { overwrite: true })

console.log(source + ' files successfully moved to ' + dest)
