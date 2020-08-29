import axios from 'axios' ;


export default class ProductApi {
    static getAllproducts() {
      console.log("IN GET ALL API CALL")
       return axios.get('http://localhost:4000/products')
        .then(response => response.data)
        
        
    }
    
    static addProduct(product) {

       return axios.post('http://localhost:4000/products',product)
        .then(res => res.data)
      }

}

 