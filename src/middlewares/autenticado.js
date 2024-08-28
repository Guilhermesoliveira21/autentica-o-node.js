import jwt from "jsonwebtoken";

export const autenticado = async (req, res, next) => {

    const token = req.headers.authorization;

    if(!token) {
        res.status(401).json({ message: "Token invalido" })
        return
    }

    const [, accessToken] = token.split(" ");

    try {
        jwt.verify(accessToken, "secret")

        const {email, id} = await jwt.decode(accessToken)

        req.usuarioEmail = email;
        req.usuarioId = id

        return next()

    } catch (error) {
        res.status(401).json({ message: "Erro inesperado tente novamente mais tarde!" })
    }

}