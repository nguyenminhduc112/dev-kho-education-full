import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    client:{open:false,agreeDelete:false}
}
export const UserSlice = createSlice({
    name:'crudUser',
    initialState,
    reducers:{
        dialogDeleteVisible : (state,action) =>{
            state.client.open = action.payload
        },
    }
})

export const {dialogDeleteVisible} = UserSlice.actions

export default UserSlice.reducer