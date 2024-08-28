import { Router } from "express";
import AuthControllers from "../controllers/AuthControllers.js";

const router = Router();

router.post("/user/auth", AuthControllers.login);


export default router;