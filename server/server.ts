import express from 'express'
import * as Path from 'node:path/posix'

const server = express()

// Middleware
server.use(express.json())

// Static folder
server.use(express.static(Path.resolve('public')))

export default server
