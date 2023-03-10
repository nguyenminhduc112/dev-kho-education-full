import { Schema , models,model } from "mongoose";

const questionSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    id_cat_ques:{
        type:String,
        required:true
    },
    status:{
        type:Number,
        required:true
    },
    id_user:{
        type:String,
        required:true
    },
    creacte_time:String,
    updated_time: String
})

const Question = models.question|| model('question',questionSchema)
export default Question