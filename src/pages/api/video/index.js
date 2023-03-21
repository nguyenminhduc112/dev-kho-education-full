import { createVideo, deleteVideo, getVideo, getVideos, getVideosByChapterID, updateVideo } from "Controllers/VideosController";
import connectMongo from "Database/conn";
export default async function handler(req, res) {
    connectMongo().catch(() => res.status(405).json({ error: "Error in the Connection" }))
    // Type of request
    // ['GET','POST','PUT','DELETE']
    const method = req.method
    if (method == "GET") {
        if (req.query.videoID) {
            getVideo(req, res)
        } else if (req.query.chapterID) {
            getVideosByChapterID(req, res)
        }
        else {
            getVideos(req, res)
        }
    } else if (method == "POST") {
        try {
            createVideo(req, res)
        } catch (error) {
            res.status(404).json({ error: "Error While Fetching Data" })
        }
    }
    else if (method == "PUT") {
        try {
            updateVideo(req, res)
        } catch (error) {
            res.status(404).json({ error: "Error While Fetching Data" })
        }
    } else if (method == "DELETE") {
        try {
            deleteVideo(req, res)
        } catch (error) {
            res.status(404).json({ error: "Error While Fetching Data" })
        }
    } else {
        res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
        res.status(405).end(`Method ${method} Not Allowd`)
    }
}