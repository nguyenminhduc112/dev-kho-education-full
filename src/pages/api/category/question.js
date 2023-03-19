import { createCategoryQuestion, deleteCategoryQuestion, getCategoryQuestion, getCategoryQuestions } from "Controllers/CategoryController";
import connectMongo from "Database/conn";
export default async function handler(req, res) {
    connectMongo().catch(() => res.status(405).json({ error: "Error in the Connection" }))
    // Type of request
    // ['GET','POST','PUT','DELETE']
    const method = req.method
    if (method == "GET") {
        if (req.query.id_cat_qes) {
            getCategoryQuestion(req, res)
        }
        else {
            getCategoryQuestions(req, res)
        }
    } else if (method == "POST") {
        try {
            createCategoryQuestion(req, res)
        } catch (error) {
            res.status(404).json({ error: "Error While Fetching Data" })
        }
    }
    else if (method == "DELETE") {
        try {
            deleteCategoryQuestion(req, res)
        } catch (error) {
            res.status(404).json({ error: "Error While Fetching Data" })
        }
    } else {
        res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
        res.status(405).end(`Method ${method} Not Allowd`)
    }
}