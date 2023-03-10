import Users from "Models/userModel"
export async function getUsers(req, res) {
    try {
        const users = await Users.find({})
        if (!users) return res.status(404).json({ error: "Data not found" })
        res.status(200).json(users)
    } catch (error) {
        res.status(404).json({ error: "Error While Fetching Data" })
    }
}
// Get by id: http://localhost:3000/api/users/1
export async function getUser(req, res) {
    try {
        const {userID} = req.query
        const user = await Users.findById(userID)
        if (!user) return res.status(404).json({ error: "User not found" })
        res.status(200).json(user)
    } catch (error) {
        res.status(404).json({ error: "Error While Fetching Data" })
    }
}
export async function getUserByEmail(req, res) {
    try {
        const {email} = req.query
        const user = await Users.findOne({email})
        if (!user) return res.status(404).json({ error: "User not found" })
        res.status(200).json(user)
    } catch (error) {
        res.status(404).json({ error: "Error While Fetching Data" })
    }
}
export async function registerUser(req, res) {
    try {
        const formData = req.body
        if (!formData) return res.status(404).json({ error: "Form Data Not Provied" })
        const userEmail = await Users.findOne({ email: formData.email }).exec();
        if (userEmail) {
            return res.status(200).json({ error: "Email đã được tạo trong tài khoản" })
        } else {
            Users.create(formData, function (err, data) {
                return res.status(200).json(data)
            })
        }

    } catch (error) {
        res.status(404).json({ error: "Error While Fetching Data" })
    }
}

export async function updateUser(req, res) {
    try {
        const {userID} = req.query
        const formData = req.body

        if (userID && formData) {
            await Users.findByIdAndUpdate(userID, formData)
            return res.status(200).json(formData)
        }
        res.status(404).json({ error: "User Not Selected" })
    } catch (error) {
        res.status(404).json({ error: "Error While Updating The Data" })
    }
}

export async function deleteUser(req, res) {
    try {
        const {userID} = req.query
        if (userID) {
            await Users.findByIdAndDelete(userID)
            return res.status(200).json({deleted:userID})
        }
        res.status(404).json({ error: "User Not Selected" })
    } catch (error) {
        res.status(404).json({ error: "Error While Deleting The Data" })
    }
}