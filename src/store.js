import {
    configureStore,
    getDefaultMiddleware
  } from "@reduxjs/toolkit";

import createSagaMiddleware from "redux-saga";
import rootSaga from './sagas/saga' ; 
import {categorySlice} from './reducers/Category' ; 
import {imageSlice} from './reducers/Images' ; 
let sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const store = configureStore({
    reducer:{
        categorys: categorySlice.reducer , 
        images : imageSlice.reducer
    },
    middleware
}) ; 

sagaMiddleware.run(rootSaga) ; 

export default store ; 

