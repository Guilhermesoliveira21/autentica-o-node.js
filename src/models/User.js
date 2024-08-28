import { model, Schema } from "mongoose";
import mongoose from "../db/conn.js";

const UserSchema = new Schema({
    nome: {type: String, require: true},
    email: {type: String, require: true},
    senha: {type: String, require: true},
})

export default model("User", UserSchema);