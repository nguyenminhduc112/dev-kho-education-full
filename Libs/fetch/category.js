

// Danh sách mục lục khóa học
export const getCategoryCourses = async () => {
    const response = fetch(`/api/category/course`)
    const json = await (await response).json()
    return json
}
// Lấy một mục lục khóa học theo id
export const getCategoryCourse = async (id_cat_cour) => {
    const response = fetch(`/api/category/course?id_cat_cour=${id_cat_cour}`)
    const json = await (await response).json()
    if (json) return json
    return {}
}

// Danh sách mục lục khóa học
export const getCategoryQuestions = async () => {
    const response = fetch(`/api/category/question`)
    const json = await (await response).json()
    return json
}
// Lấy một mục lục khóa học theo id
export const getCategoryQuestion = async (id_cat_qes) => {
    const response = fetch(`/api/category/question?id_cat_qes=${id_cat_qes}`)
    const json = await (await response).json()
    if (json) return json
    return {}
}

// Tạo danh mục khóa học
export const createCategoryCourse = async (formData) => {
    const data = {
        name: formData.name,
    }
    const Option = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }
    const response = fetch(`/api/category/course`, Option)
    const json = await (await response).json()
    return json
}

// Tạo danh mục câu hỏi
export const createCategoryQuestion = async (formData) => {
    const data = {
        name: formData.name,
    }
    const Option = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }
    const response = fetch(`/api/category/question`, Option)
    const json = await (await response).json()
    return json
}

// Xóa danh mục khóa học
export const deleteCategoryCourse = async (id_cat_cour) => {
    const Option = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    }
    const response = fetch(`/api/category/course?id_cat_cour=${id_cat_cour}`, Option)
    const json = await (await response).json()
    return json
}

// Xóa danh mục khóa học
export const deleteCategoryQuestion = async (id_cat_qes) => {
    console.log(id_cat_qes)
    const Option = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    }
    const response = fetch(`/api/category/question?id_cat_qes=${id_cat_qes}`, Option)
    const json = await (await response).json()
    return json
}