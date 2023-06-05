import Course from "Models/courseModel";
export async function getCourses(req, res) {
    try {
        const courses = await Course.find({})
        if (!courses) return res.status(404).json({ error: "Data not found" })
        res.status(200).json(courses)
    } catch (error) {
        res.status(404).json({ error: "Error While Fetching Data" })
    }
}

export async function getCoursesByUserID(req, res) {
    try {
        const { userID } = req.query
        const courses = await Course.find({ id_user: userID })
        if (!courses) return res.status(404).json({ error: "Data not found" })
        res.status(200).json(courses)
    } catch (error) {
        res.status(404).json({ error: "Error While Fetching Data" })
    }
}
// Get by id: http://localhost:3000/api/course/1
export async function getCourse(req, res) {
    try {
        const { courseID } = req.query
        const course = await Course.findById(courseID)
        if (!course) return res.status(404).json({ error: "Data not found" })
        res.status(200).json(course)
    } catch (error) {
        res.status(404).json({ error: "Error While Fetching Data" })
    }
}
export async function getCoursesByCategory(req, res) {
    try {
        const { categoryID } = req.query
        const course = await Course.find({ id_cat_cour: categoryID })
        if (!course) return res.status(404).json({ error: "Data not found" })
        res.status(200).json(course)
    } catch (error) {
        res.status(404).json({ error: "Error While Fetching Data" })
    }
}

export async function createCourse(req, res) {
    try {
        const formData = req.body
        if (!formData) return res.status(404).json({ error: "Form Data Not Provied" })
        Course.create(formData, function (err, data) {
            return res.status(200).json(data)
        })
    } catch (error) {
        res.status(404).json({ error: "Error While Fetching Data" })
    }
}

export async function updateCourse(req, res) {
    try {
        const { courseID } = req.query
        const formData = req.body

        if (courseID && formData) {
            await Course.findByIdAndUpdate(courseID, formData)
            return res.status(200).json(formData)
        }
        res.status(404).json({ error: "Data Not Selected" })
    } catch (error) {
        res.status(404).json({ error: "Error While Updating The Data" })
    }
}

export async function deleteCourse(req, res) {
    try {
        const { courseID } = req.query
        if (courseID) {
            await Course.findByIdAndDelete(courseID)
            return res.status(200).json({ deleted: courseID })
        }
        res.status(404).json({ error: "User Not Selected" })
    } catch (error) {
        res.status(404).json({ error: "Error While Deleting The Data" })
    }
}