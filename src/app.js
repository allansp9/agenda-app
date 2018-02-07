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

const store = configureStore();
store.subscribe(() => {
  const state = store.getState();
  console.log(getVisibleContatos(state.contatos, state.filter));
});

const contatoUm = store.dispatch(addContato({
  nome: 'Allan',
  sobrenome: 'Pereira',
  email: 'asda',
  telefone: 2232,
  endereco: 'aaaa',
}));

const contatoDois = store.dispatch(addContato({
  nome: 'Tony',
  sobrenome: 'Pereira',
  email: 'asda',
  telefone: 2232,
  endereco: 'aaaa',
}));
store.dispatch(addContato({
  nome: 'Bambi',
  sobrenome: 'Pereira',
  email: 'asda',
  telefone: 2232,
  endereco: 'aaaa',
}));

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
