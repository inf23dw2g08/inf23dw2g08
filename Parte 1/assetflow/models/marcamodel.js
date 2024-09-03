const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('assetflow', 'root', 'tech.ISous4', {
    host: 'localhost',
    dialect: 'mysql'
});

const Marca = sequelize.define('Marca', {
    nome: {
        type: DataTypes.STRING(45),
        allowNull: false
    }
}, {
    tableName: 'tb_marcas',
    timestamps: false
});

module.exports = Marca;
