import { Schema , models,model } from "mongoose";

const UserCourseSchema = new Schema({
    id_user:{
        type:String,
        required:true
    },
    id_course:{
        type:String,
        required:true
    }
})

const UserCourse = models.userCourse|| model('userCourse',UserCourseSchema)
export default UserCourse