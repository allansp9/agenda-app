import React from 'react';
import { connect } from 'react-redux';
import PreviewContato from './PreviewContato';
import selectContatos from '../selectors/contatos';
import setActive from '../actions/active';

const ListaContatos = ({ contatos }) => (
  <div>{contatos.map(contato => <PreviewContato key={contato.id} {...contato} />)}</div>
);

const mapStateToProps = state => ({
  contatos: selectContatos(state.contatos, state.filter.text),
  // contatos: state.contatos,
  active: state.active,
});

const mapDispatchToProps = dispatch => ({
  setActive: active => dispatch(setActive(active)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListaContatos);
