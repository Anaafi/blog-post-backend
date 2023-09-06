
const express = require('express')
const blogs = require('./routes/blog')

const server = express();

server.use(express.json());

const PORT = 7000;

server.listen(PORT, () => {
    console.log(`Application is running on port ${PORT}`)
})

server.use('/blog', blogs)

module.exports = server;