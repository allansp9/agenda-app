import React from 'react';
import { connect } from 'react-redux';
import { selectContatos, selectActiveUser } from '../selectors/contatos';
import Dashboard from './Dashboard';
import Busca from './Busca';
import ListaContatos from './ListaContatos';
import PreviewContato from './PreviewContato';
import InfoContato from './InfoContato';
import AddContato from './AddContato';
import EditContato from './EditContato';
import Footer from './Footer';

const App = ({ activePage, contatos, contatoVisivel }) => (
  <div className="content-container">
    <div className="contatos-wrapper">
      <ListaContatos>
        <Busca />
        {contatos.map(contato => <PreviewContato key={contato.id} {...contato} />)}
      </ListaContatos>
      <Dashboard>
        {activePage === 'info' && <InfoContato contato={contatoVisivel} />}
        {activePage === 'add' && <AddContato />}
        {activePage === 'edit' && <EditContato contato={contatoVisivel} />}
      </Dashboard>
    </div>
    <Footer />
  </div>
);

const mapStateToProps = (state) => {
  const { activeUser, activePage } = state.active;
  return {
    contatos: selectContatos(state.contatos, state.filter.text),
    contatoVisivel: selectActiveUser(activeUser, state.contatos)[0],
    activePage,
  };
};

export default connect(mapStateToProps)(App);
