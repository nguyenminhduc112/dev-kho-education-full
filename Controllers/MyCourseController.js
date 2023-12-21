import MyCourse from "Models/myCourseModel";

export async function getMyCourseByUserID(req, res) {
    try {
        const { userID } = req.query
        const myCourses = await MyCourse.find({ id_user: userID })
        if (!myCourses) return res.status(404).json({ error: "Data not found" })
        res.status(200).json(myCourses)
    } catch (error) {
        res.status(404).json({ error: "Error While Fetching Data" })
    }
}
export async function getMyCourseByUserIDAndCourseID(req, res) {
    try {
        const { userID } = req.query
        const { courseID } = req.query
        const myCourses = await MyCourse.find({ id_user: userID, id_course: courseID })
        if (!myCourses) return res.status(200).json([])
        res.status(200).json(myCourses)
    } catch (error) {
        res.status(404).json({ error: "Error While Fetching Data" })
    }
}
export async function createMyCourse(req, res) {
    try {
        const formData = req.body
        if (!formData) return res.status(404).json({ error: "Form Data Not Provied" })

        MyCourse.create(formData, function (err, data) {
            return res.status(200).json(data)
        })

    } catch (error) {
        res.status(404).json({ error: "Error While Fetching Data" })
    }
}

export async function updateMyCourse(req, res) {
    try {
        const { myCourseID } = req.query
        const formData = req.body

        if (myCourseID && formData) {
            await MyCourse.findByIdAndUpdate(myCourseID, formData)
            return res.status(200).json(formData)
        }
        res.status(404).json({ error: "Data Not Selected" })
    } catch (error) {
        res.status(404).json({ error: "Error While Updating The Data" })
    }
}