import {combineReducers, createStore} from 'redux';
import categoriesReducer from './categories';
import productsReducer from './products';
import cartReducer from './cart'

let reducers = combineReducers({categoriesReducer,productsReducer,cartReducer});

const store = () => {
    return createStore(reducers)
}

export default store();