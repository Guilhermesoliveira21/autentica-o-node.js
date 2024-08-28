import Viagem from "../models/Viagem.js";
import User from "../models/User.js";
import { recuperarId } from "../utils/Auth.js";

class DashboardControllers {

    static async dashboard(req, res) {

        const user_id = await recuperarId(req)
        const viage = await Viagem.findOne({user: user_id})

        if(String(viage.user) !== String(user_id)) {
            res.status(401).json({message: "Erro: você não possui permissão para Dashboard."})
            return
        }

        try {
            const listar = await Viagem.find({user: user_id});
            res.status(200).json(listar)
        } catch (error) {
            res.status(401).json({message: "Erro: houve um erro inesperado, tente novamente mais tarde :("})
            return
        }     
    }

}

export default DashboardControllers;