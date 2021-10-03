import { call, takeEvery, put } from "redux-saga/effects";
import axios from 'axios' ; 
import {sagaActions} from '../actions/sagaActions' ; 
import {fetchCategory ,numberPageCategory , searchCategoryAction} from '../reducers/Category' ; 
import {fetchImagesPage , searchImages , fetchOnImage } from '../reducers/Images'
 
let callAPI = async({url , method , data})=>{
    return await axios({
        method,  url,  data
    }).then(resp => {
        return resp;

    }).catch(error => {
        console.log(error);
    });  
};

export function* fetchPageImageData (action)
{
    try{
        const result = yield call(async()=>{
            return await callAPI({method:'GET' ,url:`http://localhost:4000/images?_page=${action.payload.page}&_limit=9&category_id=${action.payload.category_id}`  })
          }); 
        if(result)
        {
            yield put(fetchImagesPage({images:result.data , currentPage:action.payload.page}))
        }
    }catch(e)
    {
        yield put({type : 'FETCH_IMAGE_ERROR'});

    }
}

export function* searchImage (action)
{
    try{
        const result = yield call(async()=>{
            return await callAPI({method:'GET' , url:`http://localhost:4000/images?name=${action.payload.data}`})
        })
        if(result)
        {
            yield put(searchImages({images:result.data}))
        }
    }catch(e)
    {
        yield put({type:'FETCH_IMAGE_ERROR'})
    }
}

export function* fetchOneImage(action)
{
    try{
        const result =  yield call(async()=>{
            return await callAPI({method:'GET' , url:`http://localhost:4000/images?id=${action.payload.data}`})
        }); 
        const result2 =  yield call(async()=>{
            return await callAPI({method:'GET' , url:`http://localhost:4000/images/_page=1&_limit=8&category_id=${action.payload.category_id}`})
        });
        if(result)
        {
            yield put(fetchOnImage({images:result.data , relatedImages :result2.data }))
        }
    }catch(e)
    {
        console.log(e);
        yield put({type:'FETCH_IMAGE_ERROR'})
    }
}

export function* fetchDataCategory (){
    try{
        const result = yield call(async()=>{
          return await callAPI({method:'GET' ,url:`http://localhost:4000/category?_page=1&_limit=9`  })
        }); 
        if(result)
        {       
            yield put(fetchCategory({categorys:result?.data , currentPage:1 , totalpage:1}))

        }
    }catch(e)
    {
        yield put({type : 'FETCH_CATEGORY_ERROR'});
    }
}

export function* fetchDataPageCategory (action){
    try{
        const result = yield call(async()=>{
          return await callAPI({method:'GET' ,url:`http://localhost:4000/category?_page=${action.page}&_limit=9`  })
        }); 
        if(result)
        {       
            yield put(numberPageCategory({categorys:result?.data , currentPage:action.page}))

        }
    }catch(e)
    {
        yield put({type : 'FETCH_CATEGORY_ERROR'});
    }
};

/* in the search you can find the value by write the full name   */

export function* searchCategory (action){
    try{
        const result = yield call(async()=>{
          return await callAPI({method:'GET' ,url:`http://localhost:4000/category?name=${action.payload.data}`  })
        }); 
        if(result)
        {       
            yield put(searchCategoryAction({categorys:result?.data }))

        }
    }catch(e)
    {
        console.log(e) ; 
        yield put({type : 'FETCH_CATEGORY_ERROR'});
    }
};

export default function* rootSaga()
{
    yield takeEvery(sagaActions.FETCH_INIT_CATEGORY , fetchDataCategory);
    yield takeEvery(sagaActions.FETCH_PAGE_CATEGORY , fetchDataPageCategory);
    yield takeEvery(sagaActions.SEARCH_CATEGORY , searchCategory);
    yield takeEvery(sagaActions.FETCH_IMAGES_PAGE ,fetchPageImageData ) ; 
    yield takeEvery(sagaActions.SEARCH_IMAGES , searchImage);
    yield takeEvery(sagaActions.FETCH_ONE_IMAGE , fetchOneImage);

};