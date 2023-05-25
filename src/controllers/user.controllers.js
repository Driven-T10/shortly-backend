import { getUrlsByUserDB, getUserByIdDB } from "../repositories/user.repository.js"

export async function getCurrentUser(req, res) {
    const { userId } = res.locals

    try {
        const { rows: [user] } = await getUserByIdDB(userId)
        const { rows: urls } = await getUrlsByUserDB(userId)
        res.send({ ...user, shortenedUrls: [...urls] })
    } catch (err) {
        res.stats(500).send(err.message)
    }
}


export async function getUserRanking(req, res) {

    try {
        res.send("getUserRanking")
    } catch (err) {
        res.stats(500).send(err.message)
    }
}
