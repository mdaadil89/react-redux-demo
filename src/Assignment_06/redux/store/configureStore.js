import {createStore, applyMiddleware} from 'redux';
import productReducer from '../reducer/productReducer';
import thunk from 'redux-thunk';

export default function configureStore() {
    return createStore(
        productReducer,
        applyMiddleware(thunk)
    )
}


