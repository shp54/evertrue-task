import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import * as schema from './schema'
import registerServiceWorker from './registerServiceWorker';

//Create Redux store
let reducer = (state, action) => { 
	switch(action.type){
		case 'SET_VISIBLE_GROUP':
			return { ...state, visibleGroup: action.group, visibleProperty: '' }
	    case 'SET_VISIBLE_PROPERTY':
			return { ...state, visibleProperty: action.property }
		default:
			return state
	}
}

let initialState = { visibleGroup: '', visibleProperty: '', schema: schema }

let store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root')
);
	
registerServiceWorker();
