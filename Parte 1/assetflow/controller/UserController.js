const userService = require("../service/UserService");

function userController(req, res, next){ 
    userService.getAll()
    .then(users => { console.log("users", users); res.json(users); return;})
    .catch(err => res.json(err));
}

module.exports = userController;