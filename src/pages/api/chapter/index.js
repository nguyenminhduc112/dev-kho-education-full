import connectMongo from "Database/conn";
import { createChapter, deleteChapter, getChapter, getChapters, updateChapter } from "Controllers/ChapterController";
export default async function handler(req, res) {
    connectMongo().catch(() => res.status(405).json({ error: "Error in the Connection" }))
    // Type of request
    // ['GET','POST','PUT','DELETE']
    const method = req.method
    if (method == "GET") {
        if (req.query.chapterID) {
            getChapter(req, res)
        }
        else {
            getChapters(req, res)
        }
    } else if (method == "POST") {
        try {
            createChapter(req, res)
        } catch (error) {
            res.status(404).json({ error: "Error While Fetching Data" })
        }
    }
    else if (method == "PUT") {
        try {
            updateChapter(req, res)
        } catch (error) {
            res.status(404).json({ error: "Error While Fetching Data" })
        }
    } else if (method == "DELETE") {
        try {
            deleteChapter(req, res)
        } catch (error) {
            res.status(404).json({ error: "Error While Fetching Data" })
        }
    } else {
        res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
        res.status(405).end(`Method ${method} Not Allowd`)
    }
}