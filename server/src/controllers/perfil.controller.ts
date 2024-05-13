import { Request, Response } from "express"
import sequelize from "../db/connection";
import { QueryTypes, Sequelize } from "sequelize";
import { Post } from "../models/post.model";
import { User } from "../models/user.model";

export const getPosts = async (req: Request, res: Response) =>{    
    const { id } = req.params;
    const listPosts = await Post.findAll({
        where: {
            userId: id
        },
        attributes: [
            'id','contenido','fechaPublicacion','likes','dislikes'
        ]
    });
    res.json(listPosts);
}

export const getUser = async (req: Request, res: Response) =>{
    const {id} = req.params
    console.log(id)

    const user = await User.findOne({
        where: {
            id: id
        },
        attributes: [
            'id','nombreUsuario','descripcion','cuentasSeguidas', 'seguidores','imgPerfil'
        ]
    });
    res.json(user);
}
export const countPosts = async(req: Request, res: Response) => {
    const {id} = req.params;
    const totalPosts = await Post.count({
        where: {
            userId: id
        }
    });
    res.json(totalPosts);
}
export const cuentasSeguidas = async(req: Request, res: Response) => {
    const { id } = req.params;
    const seguidos = await sequelize.query('Select userIdSeguido, userIdSeguidor, nombreUserSeguido, nombreUserSeguidor from seguidosseguidores where userIdSeguidor = ?', {type: QueryTypes.SELECT, replacements: [id]});

    res.json(seguidos);
}
export const cuentasSeguidores = async(req: Request, res: Response) => {
    const { id } = req.params;
    const seguidos = await sequelize.query('Select userIdSeguido, userIdSeguidor, nombreUserSeguido, nombreUserSeguidor from seguidosseguidores where userIdSeguido = ?', {type: QueryTypes.SELECT, replacements: [id]});

    res.json(seguidos);
}