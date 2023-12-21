const BASE_URL = process.env.URL_BASE

export const getChapters = async (courseID) => {
    const response = fetch(`${BASE_URL}/api/chapter/?courseID=${courseID}`)
    const json = await (await response).json()
    return json
}

export const getChapter = async (chapterID) => {
    const response = fetch(`${BASE_URL}/api/chapter/?chapterID=${chapterID}`)
    const json = await (await response).json()
    if (json) return json
    return {}
}
export const createChapter = async ({ formData, courseID }) => {
    const data = {
        name: formData.chapter,
        id_course: courseID,
        stt: formData.stt,
    }
    const Option = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }
    const response = fetch(`${BASE_URL}/api/chapter`, Option)
    const json = await (await response).json()
    return json
}
export const updateChapter = async (formData) => {
    const data = {
        name: formData.chapter,
        stt: formData.stt,
    }
    const Option = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }
    const response = fetch(`${BASE_URL}/api/chapter`, Option)
    const json = await (await response).json()
    return json
}
export const deleteChapter = async (chapterID) => {
    const Option = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    }
    const response = fetch(`${BASE_URL}/api/chapter/?chapterID=${chapterID}`, Option)
    const json = await (await response).json()
    return json
}