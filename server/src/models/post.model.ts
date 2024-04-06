
import { DataTypes } from "sequelize";
import sequelize from "../db/connection";
import { User } from "./user.model"; 
import { Organizacion } from "./organizacion.model";

export const Post = sequelize.define('post', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    contenido:{
        type: DataTypes.STRING,
        allowNull: false
    }, 
    fechaPublicacion:{
        type: DataTypes.DATE,
        allowNull: false
    },
    likes:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    comentarios:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    reportes:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
});
User.hasMany(Post); // Un usuario puede tener muchos posts
Organizacion.hasMany(Post); // Una organizacion puede tener muchos posts
Post.belongsTo(User);
Post.belongsTo(Organizacion);