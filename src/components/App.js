import React from 'react';
import { connect } from 'react-redux';
import { selectContatos, selectActiveUser } from '../selectors/contatos';
import Busca from './Busca';
import PreviewContato from './PreviewContato';
import InfoContato from './InfoContato';
import AddContato from './AddContato';
import EditContato from './EditContato';
import NovoContato from './NovoContato';
import Aside from './Aside';

const App = ({ activePage, contatos, contatoVisivel }) => (
  <div>
    <div className="sidebar">
      <Busca />
      <div className="lista-contatos">
        {contatos.map(contato => <PreviewContato key={contato.id} {...contato} />)}
      </div>
      <NovoContato />
    </div>
    {activePage !== '' && (
      <Aside>
        {activePage === 'info' && <InfoContato contato={contatoVisivel} />}
        {activePage === 'add' && <AddContato />}
        {activePage === 'edit' && <EditContato contato={contatoVisivel} />}
      </Aside>
    )}
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
