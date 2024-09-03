'user strict'

var mysql = require('mysql2');

var connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'tech.ISous4',
    database: "assetflow",
    port: "3306",
    dialect: "mysql"
});

connection.connect(function(err){
    if(err){
        console.log('Error on database connection');
        throw err;
    }

    console.log('Database connection Active');
});

module.exports = connection;