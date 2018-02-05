import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Header from './components/Header';
import './styles/styles.scss';

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <Header />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
