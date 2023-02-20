import connectMongo from "Database/conn";
import { registerUser } from "Controllers/UserController";
export default async function handler(req, res) {
    connectMongo().catch(() => res.status(405).json({ error: "Error in the Connection" }))
    // Type of request
    // ['GET','POST','PUT','DELETE']
    const method = req.method
    if(method === "POST"){
        registerUser(req, res)
    } else {
        res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
        res.status(405).end(`Method ${method} Not Allowd`)
    }
}