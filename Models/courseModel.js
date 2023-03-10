import { Schema , models,model } from "mongoose";

const CourseSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    thumbnail:{
        type:String,
        required:true
    },
    benefit:{
        type:String,
        required:true
    },
    request:{
        type:String,
        required:true
    },
    id_cat_cour:{
        type:String,
        required:true
    },
    id_user:{
        type:String,
        required:true
    },
    status:{
        type:Number,
        required:true
    },
    creacte_time:{
        type:String,
    },
    updated_time:{
        type:String,
    },
})

const Course = models.course|| model('course',CourseSchema)
export default Course