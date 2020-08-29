import React from 'react'
import Product from './Product'
//import ProductActions from '../actions/ProductActions'

export default class ProductsList extends React.Component {


    render() {
            var ProductNodes = this.props.products.map(product =>  {
                return (
            <Product key={product.id} id={product.id} name={product.prdname} quantity={product.qty}>
                {"Rs." +product.prc}
            </Product>);
    }
            
            )
      
        return(
            <>
                <table>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
        <tbody>
                        {ProductNodes}
                    </tbody>
                   
                </table>
            </>
        );
    }
}