var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var controllers = require('./controllers');
var mysql = require('mysql');
var data = require('./data');

var pool = mysql.createPool({
        connectionLimit:100,
        host: 'localhost',
        user: 'root',
        password: 'abc123',
        database: 'memory'
    });
    
data.init(pool);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

controllers.init(app);
console.log('controller init called');

app.listen(3000);
console.log('now listening on port 3000');