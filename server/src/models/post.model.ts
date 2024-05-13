
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
        type: DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    likes:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    dislikes:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    comentarios:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
});
User.hasMany(Post); // Un usuario puede tener muchos posts
Organizacion.hasMany(Post); // Una organizacion puede tener muchos posts
Post.belongsTo(User);
Post.belongsTo(Organizacion);