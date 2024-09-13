import { createSlice } from "@reduxjs/toolkit";

export const TransSlice = createSlice({
    name : 'Transac',
    initialState : {
        list:[],
        mode:true,
        idopen:null,
        
    },
    reducers:{
        getTransac: (state, action) => {
            return {...state, ...action.payload}},
        setTransac: (state, action) => {
                return {...state, ...action.payload}},
        setIdopen : (state, action) => {
            return {...state, ...action.payload}}, 
    }
})