import React from 'react';
import { connect } from 'react-redux';
// import EditContato from './EditContato';

const InfoContato = ({ contato }) => (
  <div>
    <h1>{contato.nome}</h1>
    <h3>{contato.sobrenome}</h3>
    <h3>{contato.email}</h3>
    <h3>{contato.endereco}</h3>
    <h3>{contato.telefone}</h3>
    <button>Editar</button>
  </div>
);

const mapStateToProps = state => ({
  contato: state.active.activeUser,
  active: state.active.activePage,
});

export default connect(mapStateToProps)(InfoContato);
