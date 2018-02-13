const express = require('express'),
    bodyParser = require('body-parser'),
    config = require('./config/config');

var app = new express();

//middleware to serve static files
app.use(express.static(__dirname));

//middleware to parse body
app.use(bodyParser.urlencoded({ extended: true }));

//middleware to transform body data to json
app.use(bodyParser.json());

//to serve single file for all request.
app.get('*', (req, res) => {
    return res.sendFile(__dirname + '/index.html');
})
.listen(config.Port, () => {
    console.log(`listening to ${config.Port}`);
});