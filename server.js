const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/<app-name>'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+
'/dist/<interface>/index.html'));});
// app.listen(process.env.PORT || 8080);

var port = process.env.PORT || 3000;

app.listen(port);