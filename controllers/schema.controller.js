const mongoose = require("mongoose");
const schema = require('../models/schema.model');
const filesystem = require("../filesystem");
const dbconfig = require('../db/dbconfig');
const logger = require("../logger");


mongoose.connect(dbconfig.db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
}).then(() => {
    logger.accesslog.log("info", `mongodb connection strat on port: ${27017}`);
}).catch(error => {
    logger.errorlog.log("info", `mongodb not connect on port: ${27017} with: ${error}`);
});

//connection checking 
module.exports.connectionCheck = async (req, res) => {
    res.status(200).json({
        1: `mongodb connected ${27017}`,
        2: `server runs at ${4000}`,
        3: `default collection name schema`,
    });
};
//change Schema name dynamicall
module.exports.cheangeSchemaName = async (req, res) => {
    let schemaName = req.query.schemaName;
    filesystem.dbcreate(schemaName);
};

