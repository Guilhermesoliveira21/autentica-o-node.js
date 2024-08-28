import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';

class AuthControllers {
    
    static async login(req, res) {

        const {email, senha} = req.body;

        const user = await User.findOne({email})

        if(!user) {
            res.status(401).json({ message: "E-mail não encontrado, tente novamente mais tarde!!!" })
            return
        }

        const senhaIguais = await bcrypt.compare(senha, user.senha)

        if(!senhaIguais) {
            res.status.json({ message: "Senha invalida :(" })
        }

        try {
            
            const accessToken = jwt.sign({
                usuarioId: user._id,
                usuarioEmail: user.email
            }, "secret")
            res.status(200).json({accessToken, email: req.body.email, nome: user.nome})

        } catch (error) {
            res.status(401).json({ message: "Aconteceu um erro inesperado, tente novamente mais tarde. :(" })
        }

    }
}

export default AuthControllers;