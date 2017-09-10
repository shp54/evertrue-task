import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as schema from './schema'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App schema={schema} />, document.getElementById('root'));
registerServiceWorker();
