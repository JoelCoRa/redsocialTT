import { Router } from "express";
import validateToken from "./validateToken";
import { getPostsSeg } from "../controllers/dashboard.controller";

const router = Router();
// Cambiar por los de contacto
router.get('/postseg', getPostsSeg); 


export default router;