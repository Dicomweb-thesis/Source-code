var express = require("express");
var app = express();
var server = require("http").createServer(app);
require('./routes')(express, app);

// Set up server for any client can send request to server
app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With');
    next();
})

server.listen(4000, () => console.log('Successful. The server is running at the port 4000.'));

fdsafsdf
