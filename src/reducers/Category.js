import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
    name : "category" , 
    initialState:{
        categorys:[]
    },
    reducers:{
        fetchCategory :(state , action)=>{
            return {
                todos:action.payload
            }
        }
    }  
})


export const {fetchCategory} = categorySlice.actions; 
