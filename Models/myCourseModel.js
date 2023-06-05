import { Schema, models, model } from "mongoose";

const MyCourseSchema = new Schema({
    id_user: {
        type: String,
        required: true
    },
    id_course: {
        type: String,
        required: true
    },
    id_video: {
        type: String,
        required: true
    }
})

MyCourseSchema.index({ id_user: 1, id_course: 1 }, { unique: true });

const MyCourse = models.mycourse || model('mycourse', MyCourseSchema)

export default MyCourse