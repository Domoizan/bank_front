import { combineReducers } from "@reduxjs/toolkit";
import { userSlice } from "../pages/User/userSlice";
import { userApi } from "../services/userApi";
import { TransSlice } from "../pages/Transactions/TransSlice";



export default combineReducers({
    userReducer : userSlice.reducer,
    TransReducer : TransSlice.reducer,
    [userApi.reducerPath]: userApi.reducer,
})