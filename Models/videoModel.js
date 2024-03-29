import { Schema, models, model } from "mongoose";

const VideoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    id_video_youtube: {
        type: String,
        required: true
    },
    id_chapter: {
        type: String,
        required: true
    },
    id_course: {
        type: String,
        required: true
    },
    stt: Number
})

const Video = models.video || model('video', VideoSchema)
export default Video