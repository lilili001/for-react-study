import {applyMiddleware,createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';
import promise from 'redux-promise-middleware';

const initialstate = {
    fetching:false,
    fetched:false,
    users:[],
    error:null
};
const reducer = (state = initialstate ,action)=>{
    switch (action.type) {
        case 'FETCH_USERS_PENDING':
            return {...state,fetching:true}
            break;
        case 'FETCH_USERS_REJECTED':
            return {...state,fetching:false,error:action.payload}
            break;
        case 'FETCH_USERS_FULLFILLED':
        return {...state,fetching:false,fetched:true,users:action.payload}
            break;
        default:
            break;
    }
    return state;
}

const middleware = applyMiddleware( promise(), thunk, logger );

const store = createStore(reducer,middleware);

store.dispatch({
    type:'FETCH_USERS',
    payload:axios.get('sdf')
})

// store.dispatch((dispatch)=>{
//     dispatch({type:'FETCH_USERS_START'});
//     axios.get('/sdf').then((res)=>{
//         dispatch({type:'RECEIVE_USERS',payload:res.data});
//     }).catch((err)=>{
//         dispatch({type:'RECEIVE_USERS_ERROR',payload:err});
//     }) 
// })

 