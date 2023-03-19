import { Schema, models, model } from "mongoose";

const questionCategorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
})

const QuestionCategory =  models.questionCategory || model('questionCategory', questionCategorySchema)
export default QuestionCategory