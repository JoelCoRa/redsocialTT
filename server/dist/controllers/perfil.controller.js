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
exports.cuentasSeguidores = exports.cuentasSeguidas = exports.countPosts = exports.getUser = exports.getPosts = void 0;
const connection_1 = __importDefault(require("../db/connection"));
const sequelize_1 = require("sequelize");
const post_model_1 = require("../models/post.model");
const user_model_1 = require("../models/user.model");
const getPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const listPosts = yield post_model_1.Post.findAll({
        where: {
            userId: id
        },
        attributes: [
            'id', 'contenido', 'fechaPublicacion', 'likes', 'dislikes'
        ]
    });
    res.json(listPosts);
});
exports.getPosts = getPosts;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    console.log(id);
    const user = yield user_model_1.User.findOne({
        where: {
            id: id
        },
        attributes: [
            'id', 'nombreUsuario', 'descripcion', 'cuentasSeguidas', 'seguidores', 'imgPerfil'
        ]
    });
    res.json(user);
});
exports.getUser = getUser;
const countPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const totalPosts = yield post_model_1.Post.count({
        where: {
            userId: id
        }
    });
    res.json(totalPosts);
});
exports.countPosts = countPosts;
const cuentasSeguidas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const seguidos = yield connection_1.default.query('Select userIdSeguido, userIdSeguidor, nombreUserSeguido, nombreUserSeguidor from seguidosseguidores where userIdSeguidor = ?', { type: sequelize_1.QueryTypes.SELECT, replacements: [id] });
    res.json(seguidos);
});
exports.cuentasSeguidas = cuentasSeguidas;
const cuentasSeguidores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const seguidos = yield connection_1.default.query('Select userIdSeguido, userIdSeguidor, nombreUserSeguido, nombreUserSeguidor from seguidosseguidores where userIdSeguido = ?', { type: sequelize_1.QueryTypes.SELECT, replacements: [id] });
    res.json(seguidos);
});
exports.cuentasSeguidores = cuentasSeguidores;
