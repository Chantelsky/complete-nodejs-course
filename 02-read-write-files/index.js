const fsPromises = require('fs').promises
const path = require('path')

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, 'files', 'starter.txt'),
      'utf8'
    )
    console.log(data)
    await fsPromises.unlink(path.join(__dirname, 'files', 'starter.txt'))
    await fsPromises.writeFile(
      path.join(__dirname, 'files', 'promiseWrite.txt'),
      data
    )
    await fsPromises.appendFile(
      path.join(__dirname, 'files', 'promiseWrite.txt'),
      '\n\n - I am a Node.js Developer.'
    )
    await fsPromises.rename(
      path.join(__dirname, 'files', 'promiseWrite.txt'),
      path.join(__dirname, 'files', 'promiseComplete.txt')
    )
    const newData = await fsPromises.readFile(
      path.join(__dirname, 'files', 'promiseComplete.txt'),
      'utf8'
    )
    console.log(newData)
  } catch (err) {
    console.error(err)
  }
}

fileOps()

//uncaught errors
process.on('uncaughtException', (err) => {
  console.error(`There was an uncaught error: ${err}`)
  process.exit(1) //mandatory (as per the Node.js docs)
})
