import { Request, Response } from "express"
import sequelize from "../db/connection";
import { QueryTypes } from "sequelize";

export const getPostsPropios = async (req: Request, res: Response) =>{    

    const {idUser} = req.params;
    console.log(idUser)
    const listPostPropios = await sequelize.query('SELECT users.id AS idUser ,posts.id AS idPost, posts.contenido, posts.fechaPublicacion, posts.likes, posts.dislikes, users.nombreUsuario FROM POSTS INNER JOIN users ON posts.userId = users.id WHERE users.id = ?;', {type: QueryTypes.SELECT, replacements: [idUser]});
    // console.log(JSON.stringify(listPostPropios[0]))
    res.json(listPostPropios);
    // res.json({
    //     msg: "Get Products"
    // })
}