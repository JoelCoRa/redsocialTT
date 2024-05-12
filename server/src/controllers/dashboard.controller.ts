
import { Request, Response } from "express"
import sequelize from "../db/connection";
import { QueryTypes } from "sequelize";

export const getPostsSeg = async (req: Request, res: Response) =>{
    // console.log(token);

    const listPostsSeguidos = await sequelize.query('SELECT seguidosseguidores.userIdSeguido AS UsuarioSeguido, posts.id AS idPost, posts.contenido, posts.fechaPublicacion, posts.likes, posts.dislikes, posts.userId AS UsuarioSeguidor, seguidosseguidores.nombreUserSeguido, seguidosseguidores.nombreUserSeguidor FROM POSTS INNER JOIN seguidosseguidores ON posts.userId=seguidosseguidores.userIdSeguidor ORDER BY posts.fechaPublicacion DESC;', {type: QueryTypes.SELECT});
    // const listPostsSeguidos = await sequelize.query('SELECT posts.id AS idPost, posts.contenido, posts.fechaPublicacion, posts.likes, posts.comentarios, posts.reportes, users.nombreUsuario FROM POSTS INNER JOIN users ON posts.userId = users.id WHERE users.id = 1;', {type: QueryTypes.SELECT});
    // console.log(JSON.stringify(listPostsSeguidos[0]))
    res.json(listPostsSeguidos);
}