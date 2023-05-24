
import bcrypt from "bcrypt"
import { createUserDB, getUserByEmailDB } from "../repositories/user.repository.js"

export async function signUp(req, res) {
    const { name, email, password } = req.body

    try {
        const user = await getUserByEmailDB(email)
        if (user.rowCount !== 0) return res.status(409).send({ message: "E-mail já foi cadastrado!" })

        const hash = bcrypt.hashSync(password, 10)
        await createUserDB(name, email, hash)

        res.sendStatus(201)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function signIn(req, res) {
    res.send("signin")
}