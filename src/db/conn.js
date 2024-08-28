import "dotenv/config";
import mongoose from "mongoose";

async function main() {
    await mongoose.connect(process.env.MONGO_DB)
    console.log("Conectado no MONGO_DB com sucesso!!")
}

main().catch((err) => console.log(err))

export default mongoose;