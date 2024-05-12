"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateToken_1 = __importDefault(require("./validateToken"));
const perfil_controller_1 = require("../controllers/perfil.controller");
const user_controller_1 = require("../controllers/user.controller");
const router = (0, express_1.Router)();
router.get('/postpropio/', validateToken_1.default, perfil_controller_1.getPostsPropios);
router.get('/getuser/', user_controller_1.getUser);
exports.default = router;
