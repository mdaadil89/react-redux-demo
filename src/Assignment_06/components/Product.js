import React from 'react'
import {Link} from 'react-router-dom'
import { withRouter , Redirect} from 'react-router-dom';

class Product extends React.Component {

   
    authenticate() {
        
        if(window.confirm("Press OK to Login"))
        {
            return <Redirect to='/products/${this.props.name}' />
        }
            
        else {
            return <Redirect to='/' />
        }
    }

    render() {
        const path = `/products/${this.props.name}`;
        return(
            <>
                <tr>
                    
        <td ><Link to={path}   >{this.props.name}  </Link></td>
                    <td>{this.props.quantity}</td>
                    <td>{this.props.children}</td>
                </tr>

                
            </>
        )
    }
}

export default withRouter(Product)