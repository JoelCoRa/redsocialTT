import { Router } from "express";
import validateToken from "./validateToken";
import { getPostsPropios } from "../controllers/perfil.controller";
import { getUser } from "../controllers/user.controller";

const router = Router();
router.get('/postpropio/', validateToken, getPostsPropios);
router.get('/getuser/', getUser)


export default router;