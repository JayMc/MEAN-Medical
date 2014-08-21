//modules
var express = require('express');
var app     = express();
var mongoose = require('mongoose');
var _ = require('lodash');
var http = require('http');
var server = http.createServer(app);

//config
var db = require('./config/db.js');
var port = 8080;

mongoose.connect(db.url);

app.configure(function() {
	app.use(express.static(__dirname + '/public')); 	// set the static files location /public/img will be /img for users
	app.use(express.logger('dev')); 					// log every request to the console
	app.use(express.bodyParser()); 						// have the ability to pull information from html in POST
	app.use(express.methodOverride()); 					// have the ability to simulate DELETE and PUT
});

// Add headers  
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    console.log('Client from: '+req.connection.remoteAddress);

    // Pass to next layer of middleware
    next();
});

// routes ==================================================
require('./app/routes')(app, _);

server.listen(port);
console.log('listening on '+port);
