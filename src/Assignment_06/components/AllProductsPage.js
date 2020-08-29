import React from 'react'
import {connect} from 'react-redux';
import ProductsList from './ProductsList'
import {Link} from 'react-router-dom'
import * as prodActions from '../redux/actions/productAdd.action'

class AllProductsPage extends React.Component {
    

 componentDidMount()
{
    console.log("IN ALL PROD PAGE DID MOUNT"+this.props.fetchProds())
    this.props.fetchProds();
}
    render() {
        return(
            <>
                <h2>Products List</h2>
                <ProductsList products={this.props.Data} />
                <br/>
                <Link to="/addProduct">Add Product</Link>
            </>
        );
    }}

function mapStateToProps(state) {
    return {
      Data: state
    };
  }

  const mapDispatchToProps = dispatch => {
    return {
      fetchProds: () => dispatch(prodActions.loadProducts())
    }
  }

  export default connect(mapStateToProps,mapDispatchToProps )(AllProductsPage);
