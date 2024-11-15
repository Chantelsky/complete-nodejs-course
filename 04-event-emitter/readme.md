# Event Emitter to Web Server Transition

## Introduction

This project demonstrates the transition from creating an event emitter to building a web server using Node.js. The server handles various types of requests and serves different types of files.

## Features

- Custom event emitter for logging events
- Asynchronous file operations using `fsPromises`
- Dynamic content serving based on request URL and file type
- Error handling and logging

## Logging

The server logs requests and errors to the `logs` directory. The logs include:

- `reqLog.txt`: Logs of all incoming requests
- `errorLog.txt`: Logs of any errors that occur during request handling
