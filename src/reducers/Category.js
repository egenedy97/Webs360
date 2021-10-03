import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
    name : "category" , 
    initialState:{
        categorys:[] , 
        totalpage : 1 , 
        currentPage : 1 , 
    },
    reducers:{
        fetchCategory :(state , action)=>{
            return {
                ...state , 
                categorys:action.payload.categorys,
                totalpage:action.payload.totalpage,
                currentPage:action.payload.currentPage
            }
        },
       numberPageCategory:(state , action)=>{
            return {
                ...state , 
                categorys:action.payload.categorys,
                currentPage: action.payload.currentPage
            }
        },
        searchCategoryAction : (state , action)=>{
            return {
                ...state ,
                categorys:action.payload.categorys, 
            }
        }
    }  
})


export const {fetchCategory , numberPageCategory , searchCategoryAction} = categorySlice.actions; 
