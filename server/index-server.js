var express = require("express");
var app = express();
var server = require("http").createServer(app);

// var path=require('path');

// app.use(express.static(path.join(_dirname,"public")));

// app.set("view engine","html");
// app.set("views","./views");

server.listen(3000);

app.get("/", function (request, response) {
    response.render("index");
})

app.post('/id', function (request, response) {
    response.send(request.body.id);
})

var id = '244e6e71-e34f29df-41510199-6ef5f70e-dd16855a';

var patients = require("./businesses/patient-business");
patients.getByID(id).then(function (value) {
    var x = JSON.parse(value);
    console.log(value);
})


