
import { DataTypes } from "sequelize";
import sequelize from "../db/connection";

export const User = sequelize.define('user', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombres:{
        type: DataTypes.STRING,
        allowNull: false
    }, 
    apellidos:{
        type: DataTypes.STRING,
        allowNull: false
    }, 
    fechaNacimiento: {
        type: DataTypes.DATE,
        allowNull: false
    },
    sexo: {
        type: DataTypes.STRING,
        allowNull: true
    },
    correo: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    nombreUsuario: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imgPerfil: {
        type: DataTypes.STRING,
        allowNull: true
    },
    fechaRegistro: {
        type: DataTypes.DATE,
        allowNull: false
    },
    cuentasSeguidas: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    seguidores: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    publicaciones: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    foros: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    solicitudes: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    reportes: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    tipoUsuario: {
        type: DataTypes.TINYINT,
        allowNull: false
    },
    modoOscuro: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    notificaciones: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },


})