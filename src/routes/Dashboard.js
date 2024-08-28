import { Router } from "express";
import DashboardControllers from "../controllers/DashboardControllers.js";
import { autenticado } from "../middlewares/autenticado.js";

const router = Router();

router.get("/dashboard", autenticado, DashboardControllers.dashboard);

export default router;