import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Header from './components/Header';
import ListaContatos from './components/ListaContatos';
import Dashboard from './components/Dashboard';
import WrappedContactForm from './components/FormContato';
import { addContato, removeContato, editContato, loadContatos } from './actions/contatos';
import setTextFilter from './actions/filter';
import getVisibleContatos from './selectors/contatos';
import Footer from './components/Footer';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(loadContatos('LOAD_CONTATOS'));

const jsx = (
  <Provider store={store}>
    <div>
      <Dashboard />
    </div>
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
