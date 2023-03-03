import { configureStore } from "@reduxjs/toolkit";
import DashboardSlice from "@/app/dashboard/Reducers/DashboardSlice";
export const store = configureStore({
    reducer: {
        dashboard: DashboardSlice
    }
})