import { call, takeEvery, put } from "redux-saga/effects";
import axios from 'axios' ; 
import {sagaActions} from '../actions/sagaActions' ; 
import {fetchCategory} from '../reducers/Category' ; 
 
let callAPI = async({url , method , data})=>{
    return await axios({
        method,  url,  data
    }).then(resp => {
        return resp;
    }).catch(error => {
        console.log(error);
    });  
};


export function* fetchDataCategory (){
    try{
        const result = yield call(async()=>{
          return await callAPI({method:'GET' ,url:'http://localhost:3004/category'  })
        }); 
        if(result)
        {       
            yield put(fetchCategory(result?.data))

        }
    }catch(e)
    {
        yield put({type : 'FETCH_CATEGORY_ERROR'});
    }
}

export function* fetchDataImages (){
    try{
        
    }catch(e)
    {

    }
}


export default function* rootSaga()
{
    yield takeEvery(sagaActions.FETCH_CATEGORY , fetchDataCategory)
};