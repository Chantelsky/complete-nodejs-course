# Complete All-in-One Node.js Course

## Introduction

## Course Outline

### Module 2: Read Write Files

#### Outline for `index.js`

1. **Import Required Modules**

   - `fsPromises` from `fs` module for file operations
   - `path` module for handling and transforming file paths

2. **Define `fileOps` Asynchronous Function**

   - **Try Block**
     - Read the content of `starter.txt` file
       - Log the content to the console
     - Delete the `starter.txt` file
     - Write the content to a new file `promiseWrite.txt`
     - Append additional text to `promiseWrite.txt`
     - Rename `promiseWrite.txt` to `promiseComplete.txt`
     - Read the content of `promiseComplete.txt`
       - Log the new content to the console
   - **Catch Block**
     - Log any errors that occur during the file operations

3. **Invoke `fileOps` Function**

   - Call the `fileOps` function to execute the defined file operations

4. **Handle Uncaught Exceptions**
   - Listen for `uncaughtException` events
     - Log the error to the console
     - Exit the process with a failure code

#### Outline for `stream.js`

1. **Import Required Modules**

   - `fs` module for file system operations
   - `path` module for handling and transforming file paths

2. **Create Read Stream**

   - Use `fs.createReadStream` to create a readable stream from `lorem.txt`
   - Specify the encoding as `utf8`

3. **Create Write Stream**

   - Use `fs.createWriteStream` to create a writable stream to `new-lorem.txt`

4. **Pipe Read Stream to Write Stream**
   - Use the `pipe` method to direct the data from the read stream to the write stream
