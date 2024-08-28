import bodyParser from "body-parser";
import express from "express";
import user from "./UserRoutes.js";
import auth from "./AuthRoutes.js";
import viagem from "./Viagem.js";
import dashboard from "./Dashboard.js";
import reservar from "./reservar.js";

const app = express()

app.use(
    bodyParser.json(),
    user,
    auth,
    viagem,
    dashboard,
    reservar
)

export default app;