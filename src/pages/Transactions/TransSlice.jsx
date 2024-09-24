import { createSlice } from "@reduxjs/toolkit";

export const TransSlice = createSlice({
    name : 'Transac',
    initialState : {
        list:[],
        mode:false,
        idopen:null,
        view:false,
    },
    reducers:{
        getTransac: (state, action) => {
            return {...state, ...action.payload}},
        setTransac: (state, action) => {
                return {...state, ...action.payload}},
        setIdopen : (state, action) => {
            return {...state, ...action.payload}}, 
        setView : (state, action) => {
            return {...state, ...action.payload}}, 
        setMode : (state, action) => {
            return {...state, ...action.payload}}, 
        
    }
})