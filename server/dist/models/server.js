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
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("../routes/user"));
const dashboard_1 = __importDefault(require("../routes/dashboard"));
const connection_1 = __importDefault(require("../db/connection"));
const user_model_1 = require("./user.model");
const post_model_1 = require("./post.model");
const foro_model_1 = require("./foro.model");
const recurso_model_1 = require("./recurso.model");
const solicitud_model_1 = require("./solicitud.model");
const reporte_model_1 = require("./reporte.model");
const organizacion_model_1 = require("./organizacion.model");
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3001';
        this.middlewares();
        this.routes();
        this.dbConnect();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('App running in port ' + this.port);
        });
    }
    routes() {
        this.app.use('/api/inicio', dashboard_1.default);
        this.app.use('/api/users', user_1.default);
    }
    middlewares() {
        this.app.use(express_1.default.json());
    }
    dbConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield user_model_1.User.sync();
                yield post_model_1.Post.sync();
                yield foro_model_1.Foro.sync();
                yield recurso_model_1.Recurso.sync(); // Cambiar usuario por organizacion en FK
                yield solicitud_model_1.Solicitud.sync();
                yield reporte_model_1.Reporte.sync();
                yield organizacion_model_1.Organizacion.sync();
                yield connection_1.default.authenticate();
                console.log('Connection has been established successfully.');
            }
            catch (error) {
                console.error('Unable to connect to the database:', error);
            }
        });
    }
}
exports.default = Server;
