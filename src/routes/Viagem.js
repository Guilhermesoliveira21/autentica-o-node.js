import { Router } from "express";
import ViagemControllers from "../controllers/ViagemControllers.js";
import { autenticado } from "../middlewares/autenticado.js";
import DashboardControllers from "../controllers/DashboardControllers.js";
const router = Router();

router.post('/viagem/create', autenticado, ViagemControllers.registrar)
router.put("/viagem/update/:id", autenticado, ViagemControllers.update)
router.get("/viagem/:id", autenticado, ViagemControllers.viagem)

router.get('/viagem', autenticado, ViagemControllers.listarViagens)

export default router;