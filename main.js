const express = require("express");
const path = require("path");
const bodyparser = require("body-parser");
const port = process.env.port || 4000;
const logger = require('./logger');

var app = express();
app.use(bodyparser.urlencoded({ extended: true}));
app.use(bodyparser.json());

app.use('/', (req, res, next) => {
    logger.accesslog.log("info", `request method: ` + req.method + ` url:` + req.url);
    next();
});

routes
var routes = require(path.join(__dirname, 'routes', 'schema.route'));
app.use('/', routes);

app.listen(port, () => {
    logger.accesslog.log("info", `server starts on port: ${port}`);
});
