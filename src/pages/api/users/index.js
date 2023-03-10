import connectMongo from "Database/conn";
import { getUsers,getUser,getUserByEmail, updateUser,deleteUser } from "Controllers/UserController";
export default async function handler(req, res) {
    connectMongo().catch(() => res.status(405).json({ error: "Error in the Connection" }))
    // Type of request
    // ['GET','POST','PUT','DELETE']
    const method = req.method
    if (method == "GET") {
        if (req.query.userID) {
            getUser(req, res)
        }else if (req.query.email){
            getUserByEmail(req, res)
        }
        else {
            getUsers(req, res)
        }
    }  else if (method == "PUT") {
        try {
            updateUser(req, res)
        } catch (error) {
            res.status(404).json({ error: "Error While Fetching Data" })
        }
    } else if (method == "DELETE") {
        try {
            deleteUser(req, res)
        } catch (error) {
            res.status(404).json({ error: "Error While Fetching Data" })
        }
    } else {
        res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
        res.status(405).end(`Method ${method} Not Allowd`)
    }
}