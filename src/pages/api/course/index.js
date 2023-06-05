import connectMongo from "Database/conn";
import { createCourse, deleteCourse, getCourse, getCourses, getCoursesByCategory, getCoursesByUserID, updateCourse } from "Controllers/CourseController";
export default async function handler(req, res) {
    connectMongo().catch(() => res.status(405).json({ error: "Error in the Connection" }))
    // Type of request
    // ['GET','POST','PUT','DELETE']
    const method = req.method
    if (method == "GET") {
        if (req.query.courseID) {
            getCourse(req, res)
        } else if (req.query.categoryID) {
            getCoursesByCategory(req, res)
        } else if (req.query.userID) {
            getCoursesByUserID(req, res)
        }
        else {
            getCourses(req, res)
        }
    } else if (method == "POST") {
        try {
            createCourse(req, res)
        } catch (error) {
            res.status(404).json({ error: "Error While Fetching Data" })
        }
    }
    else if (method == "PUT") {
        try {
            updateCourse(req, res)
        } catch (error) {
            res.status(404).json({ error: "Error While Fetching Data" })
        }
    } else if (method == "DELETE") {
        try {
            deleteCourse(req, res)
        } catch (error) {
            res.status(404).json({ error: "Error While Fetching Data" })
        }
    } else {
        res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
        res.status(405).end(`Method ${method} Not Allowd`)
    }
}