const dotenv = require('dotenv').config();
const path = require("path");

console.log(dotenv);

/**dotenv.config({ 
    path: path.resolve(__dirname, '../environment/', `${process.env.NODE_ENV}.env`)}
);**/

console.log(process.env.PORT);

module.exports = { 
    PORT: process.env.PORT || 5000,
    HOSTNAME: process.env.HOSTNAME || "errorhostname",
    ENV: process.env.ENV || "errorenvironment",
    PROTOCOL: process.env.PROTOCOL || "http",
}