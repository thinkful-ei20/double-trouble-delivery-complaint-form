import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import ComplaintForm from './components/ComplaintForm';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <ComplaintForm />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
