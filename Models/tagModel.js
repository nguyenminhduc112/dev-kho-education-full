import { Schema , models,model } from "mongoose";

const TagSchema = new Schema({
    name:{
        type:String,
        required:true
    }
})

const Tag = models.tag|| model('tag',TagSchema)
export default Tag