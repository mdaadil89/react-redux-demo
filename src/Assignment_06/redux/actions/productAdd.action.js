import * as types from './actionTypes';
import ProductApi from '../../data/ProductApi';

export function loadProductsSuccess(products) {
    return { type: types.LOAD_PRODUCTS_SUCCESS, 
        payload : products }
}

export function addProductSuccess(prod){
    return {type: types.ADD_PRODUCT_SUCCESS, prod}
}

export function loadProducts(){
    return function(dispatch){
        return ProductApi.getAllproducts().then(products => {
            dispatch(loadProductsSuccess(products));
        }).catch(error => {
            throw(error);
        })
        }
    }


export function addProduct(prod) {
    return function(disptach) {
        return ProductApi.addProduct(prod).then( prod => {
            disptach(addProductSuccess(prod));
        }).catch(error => {
            throw(error);
        })
    } 
}