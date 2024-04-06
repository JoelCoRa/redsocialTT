import { Router } from "express";
import validateToken from "./validateToken";
import { getDashboard } from "../controllers/dashboard.controller";

const router = Router();
router.get('/', validateToken, getDashboard);


export default router;