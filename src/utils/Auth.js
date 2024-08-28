import jwt from "jsonwebtoken";

async function recuperarId(req) {
    const token = req.headers.authorization

    const [, a] = token.split(" ")
     
    jwt.verify(a, "secret")

    const user = await jwt.decode(a)

    const id = user.usuarioId

    return id
}

export {recuperarId}