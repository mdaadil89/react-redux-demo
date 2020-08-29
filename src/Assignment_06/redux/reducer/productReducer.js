import * as types from '../actions/actionTypes';

const initialState = {
    products: []
  };


export default function productReducer(state=initialState.products, action) {

    switch (action.type){
        case types.LOAD_PRODUCTS_SUCCESS:
             console.log("IN LOAD PRODUCT CASE"+state.products)
            return action.payload;
        
        case types.ADD_PRODUCT_SUCCESS:
            return [
                ...state,
                Object.assign({},action.prod)
            ]
            
        default:
            return state;
        }
}