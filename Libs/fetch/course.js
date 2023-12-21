
export const getCourses = async () => {
    const response = fetch(`/api/course`)
    const json = await (await response).json()
    return json
}
export const getCoursesByCategory = async (categoryID) => {
    const response = fetch(`/api/course/?categoryID=${categoryID}`)
    const json = await (await response).json()
    return json
}

export const getCourse = async (courseID) => {
    const response = fetch(`/api/course/?courseID=${courseID}`)
    const json = await (await response).json()
    if (json) return json
    return {}
}

export const getCoursesByUserID = async (userID) => {
    const response = fetch(`/api/course/?userID=${userID}`)
    const json = await (await response).json()
    if (json) return json
    return {}
}

export const createCourse = async ({ formData, id_user = '63f28eef4d7be10eded2a595' }) => {
    const date = new Date()
    const dateNow = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
    const data = {
        title: formData.title,
        thumbnail: formData.thumbnail,
        benefit: formData.benefit,
        request: formData.request,
        id_cat_cour: formData.id_cat_cour,
        id_user: id_user,
        status: formData.status,
        creacte_time: dateNow,
        updated_time: ""
    }
    const Option = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }
    const response = fetch(`/api/course`, Option)
    const json = await (await response).json()
    return json
}

export const updateCourse = async ({ formData, courseID }) => {
    const date = new Date()
    const dateNow = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
    const data = {
        title: formData.title,
        thumbnail: formData.thumbnail,
        benefit: formData.benefit,
        request: formData.request,
        id_cat_cour: formData.id_cat_cour,
        status: formData.status,
        updated_time: dateNow
    }
    const Option = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }
    const response = fetch(`/api/course/?courseID=${courseID}`, Option)
    const json = await (await response).json()
    return json
}
export const deleteCourse = async (courseID) => {
    const Option = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    }
    const response = fetch(`/api/course/?courseID=${courseID}`, Option)
    const json = await (await response).json()
    return json
}