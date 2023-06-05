const BASE_URL = "http://localhost:3000"

export const getMyCourseByUserID = async (userID) => {
    const response = fetch(`${BASE_URL}/api/mycourse?userID=${userID}`)
    const json = await (await response).json()
    return json
}

export const getMyCourseByUserIDAndCourseID = async ({ userID, courseID }) => {
    const response = fetch(`${BASE_URL}/api/mycourse?userID=${userID}&courseID=${courseID}`)
    const json = await (await response).json()
    return json
}

export const createMyCourse = async (formData) => {
    const data = {
        id_user: formData.id_user,
        id_course: formData.id_course,
        id_video: formData.id_video
    }
    const Option = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }
    const response = fetch(`${BASE_URL}/api/mycourse`, Option)
    const json = await (await response).json()
    return json
}

export const updateMyCourse = async ({ formData }) => {
    const data = {
        id_user: formData.id_user,
        id_course: formData.id_course,
        id_video: formData.id_video
    }
    const Option = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }
    const response = fetch(`${BASE_URL}/api/myCourse?myCourseID=${formData.myCourseID}`, Option)
    const json = await (await response).json()
    return json
}