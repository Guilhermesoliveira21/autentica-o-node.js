import Viagem from "../models/Viagem.js";
import User from "../models/User.js"
import { recuperarId } from "../utils/Auth.js";

class ViagemControllers {

    static async registrar(req, res) {

        const {imagem, cidade, descricao} = req.body;

        const user_id = await recuperarId(req)

        try {
            const viage = await new Viagem({
                imagem,
                cidade,
                descricao,
                user: user_id
            })

            await viage.save()
            res.status(201).json(viage)
        } catch (error) {
            res.status(401).json({message: "Erro: houve um erro inesperado, tente novamente mais tarde :("})
            return
        } 
    }

    static async listarViagens(req, res) {

        try {
            const listar = await Viagem.find()
            res.status(200).json(listar)
        } catch (error) {
            res.status(401).json({message: "Erro: houve um erro inesperado, tente novamente mais tarde :("})
            return
        }
    }

    static async viagem(req, res) {
        
        const { id } = req.params;

       

        try {
            const viagem = await Viagem.findOne({_id: id});
            res.status(200).json(viagem)
        } catch (error) {
            res.status(401).json({message: "Erro: houve um erro inesperado, tente novamente mais tarde :("})
            return
        }

    }

    static async update(req, res) {

        const { id } = req.params
        const user_id = await recuperarId(req)
        const {imagem, cidade, descricao} = req.body;

        const viagem = await Viagem.findById(id)
        const user = await User.findById(user_id)

        if(String(viagem.user) !== String(user._id)) {
            res.status(401).json({message: "Erro ao atualizar viagem, a viagem é de outro usuario."})
            return
        }

       try {
        const updateViagem = await Viagem.findOneAndUpdate(
            {_id: id},
            {$set: {
                imagem, cidade, descricao, user: user_id
            }}
        )

        res.status(200).json({ message: "viagem atualizada com sucesso", updateViagem })
       } catch (error) {
        res.status(401).json({message: "Erro: houve um erro inesperado, tente novamente mais tarde :("})
        return
       }

        
    }

    

}

export default ViagemControllers;