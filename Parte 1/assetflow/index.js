//Dependencies
const app = require("express")();
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
//Controllers
const swaggerspec = require("./controller/DocsController");
const config = require("./controller/ConfigController");
//Routes
const userRoute = require("./routes/UserRoute");
const protectedRoute = require("./routes/ProtectedRoute");

app.use(cors());
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerspec));
app.use("/users", userRoute);
app.use("/protected", protectedRoute);


//start server
const startupServer = () => {
    console.log(`app running on ${config.ENV} mode at ${config.PROTOCOL}://${config.HOSTNAME}:${config.PORT}`)
};
app.listen(config.PORT, startupServer);
//app.listen(port, function(){console.log(`app running on localhost:${port}`)})
//app.listen(port, () => {console.log(`app running on localhost:${port}`)})
