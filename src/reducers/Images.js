import { createSlice } from "@reduxjs/toolkit";

export const imageSlice = createSlice({
    name : "image" , 
    initialState:{
        images:[]
    },
    reducers:{
        fetchImages :(state , action)=>{
            return {
                todos:action.payload
            }
        },
        searchImages : (state, action ,data)=>{
            return { 
                ...state , 
                images:state.images.filter((element)=>{
                    return element.name.includes(data) ;
                })
            }
        }
    }
}) ; 


export default imageSlice ; 