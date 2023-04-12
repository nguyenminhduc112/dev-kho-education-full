const BASE_URL = "http://localhost:3000"

export const getVideos = async () => {
    const response = fetch(`${BASE_URL}/api/video`)
    const json = await (await response).json()
    return json
}

export const getVideo = async (videoID) => {
    const response = fetch(`${BASE_URL}/api/video/?videoID=${videoID}`)
    const json = await (await response).json()
    if (json) return json
    return {}
}
export const createVideo = async (formData) => {
    const data = {
        name: formData.name,
        id_video_youtube: formData.id_video_youtube,
        id_chapter: formData.id_chapter,
        stt: formData.stt,
    }
    const Option = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }
    const response = fetch(`${BASE_URL}/api/video`, Option)
    const json = await (await response).json()
    return json
}
export const updateVideo = async (formData) => {
    const data = {
        name: formData.name,
        id_video_youtube: formData.id_video_youtube,
        id_chapter: formData.id_chapter,
        stt: formData.stt,
    }
    const Option = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }
    const response = fetch(`${BASE_URL}/api/video`, Option)
    const json = await (await response).json()
    return json
}
export const deleteVideo = async (videoID) => {
    const Option = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    }
    const response = fetch(`${BASE_URL}/api/chapter/?videoID=${videoID}`, Option)
    const json = await (await response).json()
    return json
}