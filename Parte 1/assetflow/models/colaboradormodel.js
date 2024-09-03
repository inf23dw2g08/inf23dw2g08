const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('assetflow', 'root', 'tech.ISous4', {
    host: 'localhost',
    dialect: 'mysql'
});

const Colaborador = sequelize.define('Colaborador', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    cargo: {
        type: DataTypes.STRING(45),
        allowNull: true
    }
}, {
    tableName: 'tb_colaboradores',
    timestamps: false
});

module.exports = Colaborador;
