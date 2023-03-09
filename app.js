const express = require('express');
const server = require('http').createServer();
const app = express();

app.get('/', function(req, res) {
	res.send('hello from server')
})

server.on('request', app)
server.listen(3000, function() { console.log("server running 3000") })

