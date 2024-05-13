import { Router } from "express";
import validateToken from "./validateToken";
import { countPosts, cuentasSeguidas, cuentasSeguidores, getPosts } from "../controllers/perfil.controller";
import { getUser } from "../controllers/perfil.controller";

const router = Router();
router.get('/postpropio/:id', getPosts);
router.get('/getuser/:id', getUser);
router.get('/getuser/totalposts/:id', countPosts);
router.get('/cuentasseguidos/:id', cuentasSeguidas);
router.get('/cuentasseguidores/:id', cuentasSeguidores);



export default router;