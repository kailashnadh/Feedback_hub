import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import reducers from './reducers';
import 'materialize-css/dist/css/materialize.min.css';
import reduxThunk from 'redux-thunk';

const store=createStore(reducers,{},applyMiddleware(reduxThunk));
//passing reducers,initialstate,middlewares to store

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector('#root')
);

console.log("Stripe key",process.env.REACT_APP_STRIPE_KEY);
console.log("Environment",process.env.NODE_ENV);

//passing component and where the component should fit  in reactDOM.render.
//Using redux store to give the state to all its available child components.