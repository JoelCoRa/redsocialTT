import {Request, Response} from 'express';
import  bcrypt  from 'bcrypt'
import { User } from '../models/user.model';
import jwt from 'jsonwebtoken';
import { QueryTypes, Sequelize } from 'sequelize';
import sequelize from '../db/connection';

export const newUser = async (req: Request, res: Response) => {
    const {nombre, apellido, fechaNacimiento, sexo, correo, nombreUsuario, password, imgPerfil, fechaRegistro, cuentasSeguidas, seguidores, publicaciones, foros, solicitudes, reportes, tipoUsuario, modoOscuro, notificaciones, descripcion} = req.body;    
    const hashedPassword = await bcrypt.hash(password, 10);
    // Se valida si el usuario existe en la BD
    const user = await User.findOne({where:{ nombreUsuario: nombreUsuario }});
    if(user){
        return res.status(400).json({
            msg: `Ya existe un usuario con el username ${nombreUsuario}`            
        });
    }  

    try{
        // Se guarda el Usuario en la BD
        await User.create({
            nombre: nombre,
            apellido: apellido,
            fechaNacimiento: fechaNacimiento,
            sexo: sexo,
            correo: correo,        
            nombreUsuario: nombreUsuario,
            password: hashedPassword,
            imgPerfil: imgPerfil,
            fechaRegistro: fechaRegistro,
            cuentasSeguidas: cuentasSeguidas,
            seguidores: seguidores,
            publicaciones: publicaciones,
            foros: foros,
            solicitudes: solicitudes,
            reportes: reportes,
            tipoUsuario: tipoUsuario,
            modoOscuro: modoOscuro,
            notificaciones: notificaciones,
            descripcion: descripcion,
        });
    } catch(error){
        res.status(400).json({
            msg: "Oops ocurrio un error!",
            error
        });
    }    
    res.json({
        msg: `Usuario ${nombreUsuario} creado exitosamente!`,
    })

}

export const loginUser = async (req: Request, res: Response) => {
    const {nombreUsuario, password} = req.body;
    console.log(nombreUsuario);

    const user:any = await User.findOne({where: {nombreUsuario: nombreUsuario}});
    if(!user){
        return res.status(400).json({
            msg: `No existe un usuario con el nombre ${nombreUsuario} en la BD`
        });
    }
    // Se valida el password
    const passwordValid = await bcrypt.compare(password, user.password);
    if(!passwordValid){
        return res.status(400).json({
            msg: `La contraseña es incorrecta!`
        })
    }
    // Se genera el token
    const token =  jwt.sign({
        nombreUsuario: nombreUsuario,
        idUser: user.id
    }, process.env.SECRET_KEY || 'pepito123');
    // console.log(token);
    res.json(token);   
}


