import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { selectContatos, selectActiveUser } from '../selectors/contatos';
import Busca from './Busca';
import PreviewContato from './PreviewContato';
import InfoContato from './InfoContato';
import AddContato from './AddContato';
import EditContato from './EditContato';
import Aside from './Aside';
import BotaoGrande from './BotaoGrande';
import Header from './Header';

const App = ({ activePage, contatos, contatoVisivel }) => (
  <div className="wrapper">
    <div className={`sidebar ${activePage && 'show-for-desktop'}`}>
      <Busca />
      <Header>Contatos</Header>
      <div className="lista-contatos">
        {contatos.length < 1 && <p className="lista-contatos__msg">Nenhum contato encontrado</p>}
        {contatos.map(contato => <PreviewContato key={contato.id} {...contato} />)}
      </div>
      {activePage !== 'add' && (
        <BotaoGrande action="add" className="botao--adicionar">
          Adicionar Contato
        </BotaoGrande>
      )}
    </div>
    <Aside activePage={activePage}>
      {activePage === 'info' && <InfoContato contato={contatoVisivel} />}
      {activePage === 'add' && <AddContato />}
      {activePage === 'edit' && <EditContato contato={contatoVisivel} />}
      {activePage && (
        <BotaoGrande action="" className="botao--voltar">
          Voltar
        </BotaoGrande>
      )}
    </Aside>
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

App.defaultProps = {
  contatoVisivel: {},
};

App.propTypes = {
  activePage: PropTypes.string.isRequired,
  contatos: PropTypes.arrayOf(PropTypes.object).isRequired,
  contatoVisivel: PropTypes.objectOf(PropTypes.node),
};

export default connect(mapStateToProps)(App);
