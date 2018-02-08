import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Header from './components/Header';
import ListaContatos from './components/ListaContatos';
import InfoContato from './components/InfoContato';
import WrappedContactForm from './components/FormContato';
import { addContato, removeContato, editContato } from './actions/contatos';
import setTextFilter from './actions/filter';
import getVisibleContatos from './selectors/contatos';
import Footer from './components/Footer';
import './styles/styles.scss';
import contatos from './mock/contatos';

const store = configureStore();

store.dispatch(addContato(contatos[0]));
store.dispatch(addContato(contatos[1]));
store.dispatch(addContato(contatos[2]));

// store.dispatch(removeContato({ id: contatoUm.contato.id }));

// store.dispatch(editContato(contatoDois.contato.id, {
//   nome: 'timmy',
//   sobrenome: 'Smith',
//   email: 'asda',
//   telefone: 2232,
//   endereco: 'aaaa',
// }));

// store.dispatch(setTextFilter('asda'));

const jsx = (
  <Provider store={store}>
    <div>
      <Header />
      <ListaContatos />
      <InfoContato />
      <WrappedContactForm />
      <Footer />
    </div>
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
