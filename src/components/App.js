import React from 'react';
import { connect } from 'react-redux';
import { selectContatos } from '../selectors/contatos';
import Dashboard from './Dashboard';
import Header from './Header';
import ListaContatos from './ListaContatos';
import PreviewContato from './PreviewContato';
import Footer from './Footer';

const App = ({ contatos }) => (
  <div>
    <Header />
    <ListaContatos>
      {contatos.map(contato => <PreviewContato key={contato.id} {...contato} />)}
    </ListaContatos>
    <Dashboard />
    <Footer />
  </div>
);

const mapStateToProps = state => ({
  contatos: selectContatos(state.contatos, state.filter.text),
});

export default connect(mapStateToProps)(App);
