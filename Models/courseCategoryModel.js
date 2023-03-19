import { Schema , models,model } from "mongoose";

const courseCategorySchema = new Schema({
    name:{
        type:String,
        required:true
    },
})

const CourseCategory = models.courseCategory|| model('courseCategory',courseCategorySchema)
export default CourseCategory