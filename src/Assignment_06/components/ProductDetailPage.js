import React from 'react'
import { withRouter } from 'react-router-dom';
import {Link} from 'react-router-dom'

class ProductDetail extends React.Component {

    componentWillMount() { 
        let authenticate = window.confirm("Press OK to Login")
        if(!authenticate){
                this.props.history.push('/products/')
        }
    }
        render() {
            return(
                <div>
                    <h1>Product Details</h1>
            <label>Product Name : {this.props.match.params.name}</label> 
                
                    <br/><br/>
                    <Link to='/products' >Back</Link>
                </div>

            );
        }

}

export default withRouter(ProductDetail)