import { Schema, models, model } from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    id_role: Number,
    token: String,
    fullname: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    creacte_time: String,
    updated_time: String
})

const Users = models.user || model('user', userSchema)
export default Users