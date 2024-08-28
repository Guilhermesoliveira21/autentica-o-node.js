import { Router } from "express";
import UserControllers from "../controllers/User.js";

const router = Router();

router.post("/user/register", UserControllers.registrar);
router.get('/user/list', UserControllers.listar);

export default router;