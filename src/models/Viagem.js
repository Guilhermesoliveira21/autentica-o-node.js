import { model, Schema } from "mongoose";
import mongoose from "../db/conn.js";

const ViagemSchema = new Schema({
    imagem: {type: String},
    cidade: {type: String, require: true},
    descricao: {type: String, require: true},
    user: Object
})

export default model("Viagem", ViagemSchema);