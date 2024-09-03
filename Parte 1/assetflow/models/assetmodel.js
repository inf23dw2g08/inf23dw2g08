const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize('assetflow', 'root', 'tech.ISous4', {
    host: 'localhost',
    dialect: 'mysql'
});

const Asset = sequelize.define('Asset', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_marca: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_colaborador: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    descricao: {
        type: DataTypes.STRING(45),
        allowNull: true
    },
    nome: {
        type: DataTypes.STRING(45),
        allowNull: true
    },
    preco: {
        type: DataTypes.FLOAT,
        allowNull: true
    }
}, {
    tableName: "tb_assets",
    timestamps: false
});

module.exports = Asset;
