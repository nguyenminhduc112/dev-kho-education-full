import Video from "Models/videoModel"
export async function getVideos(req, res) {
    try {
        const videos = await Video.find({})
        if (!videos) return res.status(404).json({ error: "Data not found" })
        res.status(200).json(videos)
    } catch (error) {
        res.status(404).json({ error: "Error While Fetching Data" })
    }
}

export async function getVideo(req, res) {
    try {
        const { videoID } = req.query
        const video = await Video.findById(videoID)
        if (!video) return res.status(404).json({ error: "Data not found" })
        res.status(200).json(video)
    } catch (error) {
        res.status(404).json({ error: "Error While Fetching Data" })
    }
}

export async function getVideosByChapterID(req, res) {
    try {
        const { chapterID } = req.query
        const videosByChapter = await Video.find({ id_chapter: chapterID })
        if (!videosByChapter) return res.status(404).json({ error: "Data not found" })
        res.status(200).json(videosByChapter)
    } catch (error) {
        res.status(404).json({ error: "Error While Fetching Data" })
    }
}

export async function createVideo(req, res) {
    try {
        const formData = req.body
        if (!formData) return res.status(404).json({ error: "Form Data Not Provied" })
        Video.create(formData, function (err, data) {
            return res.status(200).json(data)
        })
    } catch (error) {
        res.status(404).json({ error: "Error While Fetching Data" })
    }
}

export async function updateVideo(req, res) {
    try {
        const { videoID } = req.query
        const formData = req.body

        if (videoID && formData) {
            await Video.findByIdAndUpdate(videoID, formData)
            return res.status(200).json(formData)
        }
        res.status(404).json({ error: "Data Not Selected" })
    } catch (error) {
        res.status(404).json({ error: "Error While Updating The Data" })
    }
}

export async function deleteVideo(req, res) {
    try {
        const { videoID } = req.query
        if (videoID) {
            await Video.findByIdAndDelete(videoID)
            return res.status(200).json({ deleted: videoID })
        }
        res.status(404).json({ error: "Data Not Selected" })
    } catch (error) {
        res.status(404).json({ error: "Error While Deleting The Data" })
    }
}

