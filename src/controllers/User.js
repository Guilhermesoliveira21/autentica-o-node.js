import User from "../models/User.js";
import bcrypt from "bcryptjs";

class UserControllers {

    static async registrar(req, res) {

        const { nome, email, senha } = req.body;

        const user = await User.findOne({email: email})

        if(user) {
            res.status(401).json({ message: `E-mail ${email} já está em uso, tente outro :)` })
            return;
        }

        const senhaHash = await bcrypt.hash(senha, 8);

        try {
            const userRegister = await new User({
                nome, email, senha: senhaHash
            })

            await userRegister.save();
            res.status(201).json(
                { message: "Usuario cadastrado com sucesso!!", userRegister }
                )
        } catch (error) {
            res.status(401).json({ message: "Aconteceu um erro inesperado, tente novamente mais tarde. :(" })
            return
        }
        
    }

    static async listar(req, res) {

        try {
            const listarUsuarios = await User.find();
            res.status(200).json(listarUsuarios)
        } catch (error) {
            res.status(401).json({ message: error.message })
            return
        }

    }

}

export default UserControllers;