export const getVideos = async (courseID) => {
    const response = fetch(`/api/video/?courseID=${courseID}`)
    const json = await (await response).json()
    return json
}
export const getVideosByChapterID = async (chapterID) => {
    const response = fetch(`/api/video/?chapterID=${chapterID}`)
    const json = await (await response).json()
    return json
}
export const getVideo = async (videoID) => {
    const response = fetch(`/api/video/?videoID=${videoID}`)
    const json = await (await response).json()
    if (json) return json
    return {}
}
export const createVideo = async ({ formData, courseID }) => {
    const data = {
        name: formData.name,
        id_video_youtube: formData.id_video_youtube,
        id_chapter: formData.id_chapter,
        id_course: courseID,
        stt: formData.stt,
    }
    const Option = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }
    const response = fetch(`/api/video`, Option)
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
    const response = fetch(`/api/video`, Option)
    const json = await (await response).json()
    return json
}
export const deleteVideo = async (videoID) => {
    const Option = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    }
    const response = fetch(`/api/video/?videoID=${videoID}`, Option)
    const json = await (await response).json()
    return json
}