import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name : 'user',
    initialState : {
        user:{
        email: "",
        firstName: "",
        lastName: "",
        userName: "",
        id: "",
        },
        logged:false,
        edit:false,
        token:null,
    },
    reducers:{
        getUser: (state, action) => {
            return {...state, ...action.payload}},
        logIn : (state, action) => {
            return {...state, ...action.payload}},
        logOut : (state, action) => {
            return {...state, ...action.payload}}, 
        setEdit : (state, action) => {
            return {...state, ...action.payload}}, 
        setToken : (state, action) => {
            return {...state, ...action.payload}}, 
        setLogged : (state, action) => {
            return {...state, ...action.payload}}, 
    }
})