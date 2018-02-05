import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Header from './components/Header';
import Lista from './components/Lista';
import InfoContato from './components/InfoContato';
import { addContato, removeContato } from './actions/contatos';
import Footer from './components/Footer';
import './styles/styles.scss';

const store = configureStore();
store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch(addContato({
//   nome: 'Allan',
//   sobrenome: 'Pereira',
//   email: 'asda',
//   telefone: 2232,
//   endereco: 'aaaa',
// }));
// store.dispatch(addContato({
//   nome: 'Tony',
//   sobrenome: 'Pereira',
//   email: 'asda',
//   telefone: 2232,
//   endereco: 'aaaa',
// }));
// store.dispatch(addContato({
//   nome: 'Bambi',
//   sobrenome: 'Pereira',
//   email: 'asda',
//   telefone: 2232,
//   endereco: 'aaaa',
// }));

store.dispatch(removeContato('0b642d52-00ee-4598-b3dc-49b2654404ea'));

const jsx = (
  <Provider store={store}>
    <div>
      <Header />
      <Lista />
      <InfoContato />
      <Footer />
    </div>
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
