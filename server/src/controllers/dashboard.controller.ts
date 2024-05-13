
import { Request, Response } from "express"
import sequelize from "../db/connection";
import { QueryTypes } from "sequelize";

export const getPostsSeg = async (req: Request, res: Response) =>{
    const {id} =req.params;

    const listPostsSeguidos = await sequelize.query('SELECT * FROM posts inner join seguidosseguidores on posts.userId = seguidosseguidores.userIdSeguidor where seguidosseguidores.userIdSeguido = ?;', {type: QueryTypes.SELECT, replacements: [id]});
    res.json(listPostsSeguidos);
}