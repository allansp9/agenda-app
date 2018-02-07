import React from 'react';
import { connect } from 'react-redux';
import PreviewContato from './PreviewContato';
import selectContatos from '../selectors/contatos';

const ListaContatos = props => (
  <div>{props.contatos.map(contato => <PreviewContato key={contato.id} {...contato} />)}</div>
);

const mapstateToProps = state => ({
  contatos: selectContatos(state.contatos, state.filter),
});

export default connect(mapstateToProps)(ListaContatos);
