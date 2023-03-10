import { configureStore } from "@reduxjs/toolkit";
import DashboardSlice from "@/app/dashboard/Reducers/DashboardSlice";
import UserSlice from "@/app/dashboard/users/reducers/UserSlice";
export const store = configureStore({
    reducer: {
        dashboard: DashboardSlice,
        crudUser: UserSlice,
    }
})