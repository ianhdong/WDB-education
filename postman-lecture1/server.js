var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send("Hello, there!");
});

app.listen(3000);

app.get('/weather', function(req, res) {
    res.send("It's looking pretty hot today.");
});

app.get('/:id/:name', function(req, res) {
    res.send("ID: " + req.params.id + " Name: " + req.params.name);
});