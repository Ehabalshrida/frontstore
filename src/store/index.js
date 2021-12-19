import {combineReducers, createStore} from 'redux';
import categoriesReducer from './categories';
import productsReducer from './products';

//1-  combine reducers in one reducer 
let reducers = combineReducers({categoriesReducer,productsReducer});

// 2- createStore 
const store = () => {
    return createStore(reducers)
}

// 3 export 
export default store();