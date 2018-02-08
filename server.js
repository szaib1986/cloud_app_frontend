const express = require('express'),
    bodyParser = require('body-parser');

var app = new express();

app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.get('*', (req, res) => {
    return res.sendFile(__dirname + '/index.html');
})
.listen(3210, () => {
    console.log('listening to 3210')
});