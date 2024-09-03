function protectedController(req, res){
    res.send("This resource access is authenticated!");
}

module.exports = protectedController;