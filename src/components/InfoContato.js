import React from 'react';
import { connect } from 'react-redux';
import setActive from '../actions/active';

const InfoContato = ({ contato, setActive }) => (
  <div>
    <img src={contato.foto} alt="avatar" />
    <h1>{contato.nome}</h1>
    <h3>{contato.sobrenome}</h3>
    <h3>{contato.email}</h3>
    <h3>{contato.endereco}</h3>
    <h3>{contato.telefone}</h3>
    <button onClick={() => setActive('edit', { ...contato })}>Editar</button>
  </div>
);

const mapStateToProps = state => ({
  contato: state.active.activeUser,
  active: state.active.activePage,
});

const mapDispatchToProps = dispatch => ({
  setActive: (activePage, activeUser) => dispatch(setActive(activePage, activeUser)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InfoContato);
