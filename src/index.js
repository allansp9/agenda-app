import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { loadContatos } from './actions/contatos';
import App from './components/App';

import './styles/styles.scss';

const store = configureStore();

store.dispatch(loadContatos('LOAD_CONTATOS'));

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
