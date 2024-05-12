"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.loginUser = exports.newUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_model_1 = require("../models/user.model");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const newUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, apellido, fechaNacimiento, sexo, correo, nombreUsuario, password, imgPerfil, fechaRegistro, cuentasSeguidas, seguidores, publicaciones, foros, solicitudes, reportes, tipoUsuario, modoOscuro, notificaciones, descripcion } = req.body;
    const hashedPassword = yield bcrypt_1.default.hash(password, 10);
    // Se valida si el usuario existe en la BD
    const user = yield user_model_1.User.findOne({ where: { nombreUsuario: nombreUsuario } });
    if (user) {
        return res.status(400).json({
            msg: `Ya existe un usuario con el username ${nombreUsuario}`
        });
    }
    try {
        // Se guarda el Usuario en la BD
        yield user_model_1.User.create({
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
    }
    catch (error) {
        res.status(400).json({
            msg: "Oops ocurrio un error!",
            error
        });
    }
    res.json({
        msg: `Usuario ${nombreUsuario} creado exitosamente!`,
    });
});
exports.newUser = newUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombreUsuario, password } = req.body;
    console.log(nombreUsuario);
    // const userid = await sequelize.query('SELECT id FROM users where nombreUsuario = ?', {type: QueryTypes.SELECT, replacements: [nombreUsuario]});
    // console.log(userid[0])
    // const idUser = userid    
    // Se valida que el usuario exista en al BD
    const user = yield user_model_1.User.findOne({ where: { nombreUsuario: nombreUsuario } });
    if (!user) {
        return res.status(400).json({
            msg: `No existe un usuario con el nombre ${nombreUsuario} en la BD`
        });
    }
    // Se valida el password
    const passwordValid = yield bcrypt_1.default.compare(password, user.password);
    if (!passwordValid) {
        return res.status(400).json({
            msg: `La contraseña es incorrecta!`
        });
    }
    // Se genera el token
    const token = jsonwebtoken_1.default.sign({
        nombreUsuario: nombreUsuario,
        idUser: user.id
    }, process.env.SECRET_KEY || 'pepito123');
    // console.log(token);
    res.json(token);
});
exports.loginUser = loginUser;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idUser } = req.params;
    console.log(idUser);
    // const prueba :string = 'Batman5678'
    const user = yield connection_1.default.query('SELECT users.id, users.nombre, users.apellido, users.nombreUsuario, users.descripcion, users.cuentasSeguidas, users.seguidores, COUNT(*) AS totalPosts FROM users INNER JOIN posts ON users.id=posts.userId Where users.id = ?', { type: sequelize_1.QueryTypes.SELECT, replacements: [idUser] });
    // console.log(user);
    res.json(user);
});
exports.getUser = getUser;
