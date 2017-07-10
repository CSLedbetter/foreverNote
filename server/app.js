const express = require('express');
const bodyParser = require('body-parser');
const notesRoute = require('./routes/notes.route');

const app = express();

app.use(express.static(__dirname + '/../dist'));
app.use(bodyParser.json());
app.use('/api/notes', notesRoute);

app.get('/', function(req, res) {
	res.sendFile(__dirname +'/../dist.index.html');
});

module.exports = app;
