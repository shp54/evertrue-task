import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import * as schema from './schema'
import registerServiceWorker from './registerServiceWorker';

//Create Redux store
let reducer = (state = { schema }, action) => state

let store = createStore(reducer, { schema }, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

console.log(store.getState())

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root')
);
	
registerServiceWorker();
