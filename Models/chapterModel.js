import { Schema , models,model } from "mongoose";

const ChapterSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    id_course:{
        type:String,
        required:true
    }
    
})

const Chapter = models.chapter|| model('chapter',ChapterSchema)
export default Chapter