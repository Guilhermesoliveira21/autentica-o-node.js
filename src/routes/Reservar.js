import { Router } from "express";
import { autenticado } from "../middlewares/autenticado.js";
import ReservaControllers from "../controllers/ReservaControllers.js";

const router = Router()

router.post("/reservar/:id", autenticado, ReservaControllers.reservar)
router.get("/minhas/reservas", autenticado, ReservaControllers.minhasReservas)
export default router;