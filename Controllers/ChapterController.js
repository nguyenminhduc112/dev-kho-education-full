import Chapter from "Models/chapterModel";
export async function getChapters(req, res) {
    try {
        const chapters = await Chapter.find().sort({ stt: 1 })
        if (!chapters) return res.status(404).json({ error: "Data not found" })
        res.status(200).json(chapters)
    } catch (error) {
        res.status(404).json({ error: "Error While Fetching Data" })
    }
}

export async function getChapter(req, res) {
    try {
        const { chapterID } = req.query
        const chapter = await Chapter.findById(chapterID)
        if (!chapter) return res.status(404).json({ error: "Data not found" })
        res.status(200).json(chapter)
    } catch (error) {
        res.status(404).json({ error: "Error While Fetching Data" })
    }
}

export async function createChapter(req, res) {
    try {
        const formData = req.body
        if (!formData) return res.status(404).json({ error: "Form Data Not Provied" })
        Chapter.create(formData, function (err, data) {
            return res.status(200).json(data)
        })
    } catch (error) {
        res.status(404).json({ error: "Error While Fetching Data" })
    }
}

export async function updateChapter(req, res) {
    try {
        const { chapterID } = req.query
        const formData = req.body

        if (chapterID && formData) {
            await Chapter.findByIdAndUpdate(chapterID, formData)
            return res.status(200).json(formData)
        }
        res.status(404).json({ error: "Data Not Selected" })
    } catch (error) {
        res.status(404).json({ error: "Error While Updating The Data" })
    }
}

export async function deleteChapter(req, res) {
    try {
        const { chapterID } = req.query
        if (chapterID) {
            await Chapter.findByIdAndDelete(chapterID)
            return res.status(200).json({ deleted: chapterID })
        }
        res.status(404).json({ error: "Data Not Selected" })
    } catch (error) {
        res.status(404).json({ error: "Error While Deleting The Data" })
    }
}

