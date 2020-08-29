import React from 'react'
import AllProductsPage from './components/AllProductsPage'
import AddProductPage from './components/AddProductPage'
import ProductDetail from './components/ProductDetailPage'
import {BrowserRouter as Router, NavLink, Switch, Route} from 'react-router-dom'
import About from './components/About';


class Links extends React.Component{
    render() {
        return(
            <nav>
                
                <NavLink exact activeClassName="current" to="/">About</NavLink>
                <NavLink activeClassName="current" to="/products">Products</NavLink>
            </nav>
        );
    }
}
export default class App extends React.Component {
 
    

    render() {

        return(
            <Router> 
                <div> 
                    <Links/>
                    <Switch>
                        <Route exact path="/">
                            <About/>
                        </Route>
                        <Route exact path="/products">
                            <AllProductsPage/>
                        </Route>
                        <Route  path="/addProduct" component={AddProductPage} />
                        <Route  path="/products/:name" component={ProductDetail} />
                    </Switch>
                </div>
            </Router>
        );
    }
}