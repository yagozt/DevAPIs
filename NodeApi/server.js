var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Task = require('./api/models/nodeApiModel'),
    bodyParser = require('body-parser'),
    timeout = require('connect-timeout')

mongoose.Promise = global.Promise;
//mongoose.connect();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var routes = require('./api/routes/nodeApiRouter');
routes(app);

app.listen(port);

app.route('').get(function(req, res) {
    res.send("Sucesso");
})

console.log("API running on port " + port);