const { remote } = require('electron')

const contents = remote.webContents.create()
contents.executeJavaScript('console.log(this)')
  .then(console.log)
  .catch(console.error)
