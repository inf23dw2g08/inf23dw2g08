const { Sequelize, DataTypes }  = require("sequelize");

const users = Sequelize.define(
    "users",
    {
        "username": {
            type: DataTypes.STRING(50), 
            allowNull: false
        },
        "password": {
            type: DataTypes.STRING(50), 
            allowNull: false
        },
        "firstname": {
            type: DataTypes.STRING(50), 
            allowNull: true
        },
        "lastname": {
            type: DataTypes.STRING(50), 
            allowNull: true
        },

    },
    {
        tablename: "users"
    }
);

module.exports = users;

