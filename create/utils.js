const path = require('path')

module.exports.getAllBlocksData = () => {
  const glob = require('glob')

  let allBlocksString = ""

  const fileArray = glob.sync("./src/blocks/**/*.data.js")

  fileArray.forEach(function(file) {
    let queryStringFunction = require(path.resolve(file))
    allBlocksString = allBlocksString + " \n " + queryStringFunction()
  })

  return allBlocksString
}