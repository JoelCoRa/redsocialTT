"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
exports.User = connection_1.default.define('user', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombres: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    apellidos: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    fechaNacimiento: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    sexo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    correo: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    nombreUsuario: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    imgPerfil: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    fechaRegistro: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    cuentasSeguidas: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    seguidores: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    publicaciones: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    foros: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    solicitudes: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    reportes: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    tipoUsuario: {
        type: sequelize_1.DataTypes.TINYINT,
        allowNull: false
    },
    modoOscuro: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false
    },
    notificaciones: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false
    },
});
