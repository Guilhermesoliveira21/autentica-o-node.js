import Reserva from "../models/Reserva.js";
import User from "../models/User.js";
import Viagem from "../models/Viagem.js";
import { recuperarId } from "../utils/Auth.js";

class ReservaControllers {

    static async reservar(req, res) {
            const { id } = req.params;
            const {data} = req.body;
            const user_id = await recuperarId(req)

            const viagem = await Viagem.findById(id)  
            
            if(!viagem) {
                res.status(401).json({ message: "Viagem indisponivel" })
                return
            }
            
            const usuario = await User.findById(user_id) 

            if(!usuario) {
                res.status(401).json({ message: "Usuario invalido" })
                return
            }

            if(String(viagem.user) === String(user_id)) {
                res.status(401).json({message: "Voce não pode reservar a sua propria viagem"})
                return
            }

            try {
                const novaReserva = await new Reserva({
                    data,
                    viagem: {
                        imagem: viagem.imagem,
                        cidade: viagem.cidade,
                        descricao: viagem.descricao
                    },
                    usuario: {
                        id: usuario._id,
                        nome: usuario.nome,
                        email: usuario.email
                    }
                })

                await novaReserva.save()

                res.status(201).json(novaReserva)

            } catch (error) {
                res.status(401).json({message: "Erro"})
                return
            }
    }

    static async minhasReservas(req, res) {
        const user_id = await recuperarId(req)

        const reservas = await Reserva.find()

        const id = reservas.foreach((i) => {
            return Int(i.usuario.id)
        }
        
        )

        if(id === user_id) {
            res.status(401).json({message: "Nenhuma reserva encontrada"})
            return
        }

        

        console.log(user_id)

        console.log(id)

    }

}

export default ReservaControllers;