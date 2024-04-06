
import { DataTypes } from "sequelize";
import sequelize from "../db/connection";
import { User } from "./user.model"; 

export const Foro = sequelize.define('forum', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo:{
        type: DataTypes.STRING,
        allowNull: false
    }, 
    ultimaActividad:{
        type: DataTypes.DATE,
        allowNull: false
    },
    replicas:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    likes:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    reportes:{
        type: DataTypes.INTEGER, 
        allowNull: false
    },
});
User.hasMany(Foro); // Un usuario puede tener muchos foros
Foro.belongsTo(User);