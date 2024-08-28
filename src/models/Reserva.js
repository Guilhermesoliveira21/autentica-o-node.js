import { model, Schema } from "mongoose";
import mongoose from "../db/conn.js";

const ReservaSchema = new Schema({
    data: String,
    usuario: Object,
    viagem: Object
})

export default model("Reserva", ReservaSchema);