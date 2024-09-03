const swaggerJSDoc = require("swagger-jsdoc");
const config = require("./ConfigController");

const swaggerDefinition = {
    openapi:"3.0.0",
    info:{
        title: "BasicAuthetication_01",
        version: "1.0.0",
        description: "Example 01 for Basic Authentication",
        contact: {name: "d001571@umaia.pt"}
    },
    servers:[{url: `${config.PROTOCOL}://${config.HOSTNAME}:${config.PORT}`,  description: `${config.ENV} mode Server.`}],
//    servers:[{url: "http://localhost:3000"},{url: "http://10.0.9.170:8080"}], 
    components:{
        securitySchemes: {
            basicAuth:{type:"http", scheme:"basic"}
        }
    },
    security:[{basicAuth: []}],
};
const swaggeroptions = {
    swaggerDefinition,
    apis: ["./docs/**/*.yaml"]
}

const swaggerspec = swaggerJSDoc(swaggeroptions);

module.exports = swaggerspec;