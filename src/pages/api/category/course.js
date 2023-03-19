import { createCategoryCourse, deleteCategoryCourse, getCategoryCourse, getCategoryCourses } from "Controllers/CategoryController";
import connectMongo from "Database/conn";
export default async function handler(req, res) {
    connectMongo().catch(() => res.status(405).json({ error: "Error in the Connection" }))
    // Type of request
    // ['GET','POST','PUT','DELETE']
    const method = req.method
    if (method == "GET") {
        if (req.query.id_cat_cour) {
            getCategoryCourse(req, res)
        }
        else {
            getCategoryCourses(req, res)
        }
    } else if (method == "POST") {
        try {
            createCategoryCourse(req, res)
        } catch (error) {
            res.status(404).json({ error: "Error While Fetching Data" })
        }
    }
    else if (method == "DELETE") {
        try {
            deleteCategoryCourse(req, res)
        } catch (error) {
            res.status(404).json({ error: "Error While Fetching Data" })
        }
    } else {
        res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
        res.status(405).end(`Method ${method} Not Allowd`)
    }
}