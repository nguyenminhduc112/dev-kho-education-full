import QuestionCategory from "Models/questionCategoryModel";
import CourseCategory from "Models/courseCategoryModel";

// Danh sách mục lục khóa học
export async function getCategoryCourses(req, res) {
    try {
        const categoryCourses = await CourseCategory.find({})
        if (!categoryCourses) return res.status(404).json({ error: "Data not found" })
        res.status(200).json(categoryCourses)
    } catch (error) {
        res.status(404).json({ error: "Error While Fetching Data" })
    }
}
// Get by id: http://localhost:3000/api/category/course/1
// Lấy một danh mục theo ID
export async function getCategoryCourse(req, res) {
    try {
        const { id_cat_cour } = req.query
        const categoryCourse = await CourseCategory.findById(id_cat_cour)
        if (!categoryCourse) return res.status(404).json({ error: "Data not found" })
        res.status(200).json(categoryCourse)
    } catch (error) {
        res.status(404).json({ error: "Error While Fetching Data" })
    }
}

// Danh sách mục lục câu hỏi
export async function getCategoryQuestions(req, res) {
    try {
        const categoryQuestions = await QuestionCategory.find({})
        if (!categoryQuestions) return res.status(404).json({ error: "Data not found" })
        res.status(200).json(categoryQuestions)
    } catch (error) {
        res.status(404).json({ error: "Error While Fetching Data" })
    }
}
// Get by id: http://localhost:3000/api/category/question/1
// Lấy một danh sách câu hỏi theo id
export async function getCategoryQuestion(req, res) {
    try {
        const { id_cat_ques } = req.query
        const categoryQuestion = await QuestionCategory.findById(id_cat_ques)
        if (!categoryQuestion) return res.status(404).json({ error: "Data not found" })
        res.status(200).json(categoryQuestion)
    } catch (error) {
        res.status(404).json({ error: "Error While Fetching Data" })
    }
}
// Tạo danh mục khóa học 
export async function createCategoryCourse(req, res) {
    try {
        const formData = req.body
        if (!formData) return res.status(404).json({ error: "Form Data Not Provied" })
        CourseCategory.create(formData, function (err, data) {
            return res.status(200).json(data)
        })
    } catch (error) {
        res.status(404).json({ error: "Error While Fetching Data" })
    }
}

// Tạo danh mục câu hỏi
export async function createCategoryQuestion(req, res) {
    try {
        const formData = req.body
        if (!formData) return res.status(404).json({ error: "Form Data Not Provied" })
        QuestionCategory.create(formData, function (err, data) {
            return res.status(200).json(data)
        })
    } catch (error) {
        res.status(404).json({ error: "Error While Fetching Data" })
    }
}

// Xoa danh mục khóa học
export async function deleteCategoryCourse(req, res) {
    try {
        const { id_cat_cour } = req.query
        if (id_cat_cour) {
            await CourseCategory.findByIdAndDelete(id_cat_cour)
            return res.status(200).json({ deleted: id_cat_cour })
        }
        res.status(404).json({ error: "Row Not Selected" })
    } catch (error) {
        res.status(404).json({ error: "Error While Deleting The Data" })
    }
}

// Xoa danh mục câu hỏi
export async function deleteCategoryQuestion(req, res) {
    try {
        const { id_cat_qes } = req.query
        if (id_cat_qes) {
            await QuestionCategory.findByIdAndDelete(id_cat_qes)
            return res.status(200).json({ deleted: id_cat_qes })
        }
        res.status(404).json({ error: "Row Not Selected" })
    } catch (error) {
        res.status(404).json({ error: "Error While Deleting The Data" })
    }
}