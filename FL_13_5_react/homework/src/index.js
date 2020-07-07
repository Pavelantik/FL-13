import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

const store = createStore(reducers);

const Prog = () => (
    <Provider store={store}>
      <App />
    </Provider>
  );

ReactDOM.render(<Prog />, document.getElementById('root'));

