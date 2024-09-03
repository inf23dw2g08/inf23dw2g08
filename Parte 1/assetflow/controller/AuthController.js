const basicAuth = require("basic-auth");
const userService = require("../service/UserService");

async function auth(req, res, next) {
    let user = basicAuth(req);
    if(!user || !user.name || !user.pass){
        res.set("WWW-Authenticate", "Basic realm=Authorization Required");
        res.sendStatus(401);
        return;
    }
    if(await userService.authenticate({username: user.name, password: user.pass})
        //user.name === "basicUser" && user.pass === "basicPassword"
        ){
        next()
    } else {
        res.set("WWW-Authenticate", "Basic realm=Authorization Required");
        res.sendStatus(401);
        return;
    }
};

module.exports = auth;