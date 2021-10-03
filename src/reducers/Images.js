import { createSlice } from "@reduxjs/toolkit";

export const imageSlice = createSlice({
    name : "image" , 
    initialState:{
        images:[] , 
        relatedImage:[] ,
        currentPage:1
    },
    reducers:{
        fetchImagesPage :(state , action)=>{
            return {
                ...state , 
                images:action.payload.images , 
                currentPage : action.payload.page 
            }
        },
        searchImages : (state, action)=>{
            return { 
                ...state , 
                images:action.payload.images
            }
        },
        fetchOnImage: (state , action )=>{
            return {
                ...state,
                images:action.payload.images, 
                relatedImage:action.payload.relatedImage
            }
        }
    }
}) ; 


export default imageSlice ; 
export const {  fetchImagesPage , searchImages , fetchOnImage} = imageSlice.actions ;