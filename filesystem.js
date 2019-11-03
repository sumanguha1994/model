const fs = require("fs");
const logger = require("./logger");
var filefunction = function() {};
var filename = {};

filefunction.dbcreate = function(filename) {
    this.filename = filename;
    let filepath = './db/' + filename + '.js';
    let data = [
        "module" + ".exports = " + "{ " +
            "db: "+ "'mongodb://localhost:27017/"  + `${filename}` +
        "' }"
    ];
    fs.writeFile(filepath, data, (error) => {
        if(error)
        {
            logger.errorlog.log("error", `file not created`);
            throw error;
        }
        logger.accesslog.log("info", `file created with: ${data}`);
    });
    return filename;
};

// filefunction.configfileName = function() {
//     return this.filename;
// };
module.exports = filefunction;
