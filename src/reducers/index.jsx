import { combineReducers } from "@reduxjs/toolkit";
import { userSlice } from "../pages/User/userSlice";
import { userApi } from "../services/userApi";



export default combineReducers({
    userReducer : userSlice.reducer,
    [userApi.reducerPath]: userApi.reducer,
})