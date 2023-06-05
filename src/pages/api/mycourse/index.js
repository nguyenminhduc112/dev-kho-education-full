import connectMongo from "Database/conn";
import { createChapter, deleteChapter, getChapter, getChapters, updateChapter } from "Controllers/ChapterController";
import { createMyCourse, getMyCourseByUserID, getMyCourseByUserIDAndCourseID, updateMyCourse } from "Controllers/MyCourseController";
export default async function handler(req, res) {
    connectMongo().catch(() => res.status(405).json({ error: "Error in the Connection" }))
    // Type of request
    // ['GET','POST','PUT','DELETE']
    const method = req.method
    if (method == "GET") {
        if (req.query.userID && !(req.query.courseID)) {
            getMyCourseByUserID(req, res)
        } else {
            getMyCourseByUserIDAndCourseID(req, res)
        }
    } else if (method == "POST") {
        try {
            createMyCourse(req, res)
        } catch (error) {
            res.status(404).json({ error: "Error While Fetching Data" })
        }
    }
    else if (method == "PUT") {
        try {
            updateMyCourse(req, res)
        } catch (error) {
            res.status(404).json({ error: "Error While Fetching Data" })
        }
    } else if (method == "DELETE") {
        try {
            res.status(202).json({ mess: "oke" })
        } catch (error) {
            res.status(404).json({ error: "Error While Fetching Data" })
        }
    } else {
        res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
        res.status(405).end(`Method ${method} Not Allowd`)
    }
}