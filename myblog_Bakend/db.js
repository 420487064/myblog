const fs =require('fs')
const { promisify } = require('util')
const path = require('path')

const readFile = promisify(fs.readFile)


exports.getDb = async (pathdata) => {
   const dbPath = path.join(__dirname,pathdata)
   const data = await readFile(dbPath,'utf8')
 //  return dbPath
   return JSON.parse(data)
}
