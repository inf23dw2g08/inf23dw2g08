const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize('assetflow', 'root', 'tech.ISous4', {
    host: 'localhost',
    dialect: 'mysql'
});

const Avaria = sequelize.define('Avaria', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_asset: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_colaborador: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    preco_reparacao: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
}, {
    tableName: "tb_avarias",
    timestamps: false
});

module.exports = Avaria;
