var config = {}

//environment template
function Environment() {
    this.MONGOOSECONNURL = "mongodb://localhost:27017/";    //default connection url
    this.HTMLPORT = 3000;    //default port
}
// var Environment = new Object();
// Environment.MONGOOSECONNURL = "mongodb://localhost:27017/";
// Environment.HTMLPORT = 3000;    //default port

//dev settings
config.DEV = new Environment();
config.DEV.MONGOOSECONNURL = 'mongodb://localhost:27017/cheapShop';

//log messages
config.LOG = {};
config.LOG.MONGOOSECONNSUCC = "Mongoose connection succeeded.";
config.LOG.MONGOOSECONNFAIL = "Error encountered on Mongoose Connection.";
config.LOG.EXPRESSLISTENSUCC = "Listening on port 3000";

module.exports = config;