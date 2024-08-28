import express from "express";
import "dotenv/config";
import router from "./src/routes/index.js";
import mongoose from "./src/db/conn.js";"./src/db/conn.js";

const app = express();

const port = process.env.PORT || 8000

app.use(router);

app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})