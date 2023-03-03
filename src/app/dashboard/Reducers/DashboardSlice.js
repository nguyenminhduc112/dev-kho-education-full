import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    client:{
        active: 'itemDashboard'
    }
}
export const DashboardSlice = createSlice({
    name:'dashboard',
    initialState,
    reducers:{
        toogleChangeActive : (state,action) =>{
            state.client.active = action.payload
        }
    }
})

export const {toogleChangeActive} = DashboardSlice.actions

export default DashboardSlice.reducer