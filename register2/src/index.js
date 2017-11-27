import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import Store from './store';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const storeObj = Store();

ReactDOM.render(
    <Provider store={storeObj}>
      <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
