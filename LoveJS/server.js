'use strict';
var path = require('path');
var express = require('express');

var app = express();

var staticPath = path.join(__dirname, '/');
app.use(express.static(staticPath));

app.use(express.json());       // to support JSON-encoded bodies

// Allows you to set port in the project properties.
app.set('port', 8080);

app.post('/result', function (req, res) {
    console.log(req.body);
});

var server = app.listen(app.get('port'), function () {
    console.log('listening');
});