import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';
import configureStore from '../src/Assignment_06/redux/store/configureStore'
/************************************************************************************/

// BEGIN - Added below imports for code demo //

import './myindex.css'

//import App from './Assignment_01/App'
//import App from './Assignment_02/App'
//import App from './Assignment_03/App'
import App from './Assignment_06/App'
//import App from './01_welcome/App'
//import App from './02_componentReuse/App'
//import App from './03_properties/App'
//import App from './04_events/App'
//import App from './05_state/App'
//import App from './06_ref/App'
//import App from './07_propTypes/App'
//import App from './08_componentLifeCycle/App'
//import App from './08a_componentLifeCycle/App'
//import App from './09_composableComponents/App'
//import App from './09a_composableComponents/App'
//import App from './10_higherOrderComponents/App'
//import App from './12_Form_Handling/App'
//import App from './13_React_router/App'
//import App from './14_Router_transition/App
//import App from './15_flux/App'

// END //

/*************************************************************************************/
const store = configureStore();

ReactDOM.render(<Provider store={store}>
    <App />
    </Provider>,document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
