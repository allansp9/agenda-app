import React from 'react';
import { connect } from 'react-redux';
import PreviewContato from './PreviewContato';
import selectContatos from '../selectors/contatos';

const ListaContatos = ({ contatos }) => (
  <div>{contatos.map(contato => <PreviewContato key={contato.id} nome={contato.nome} />)}</div>
);

const mapStateToProps = state => ({
  contatos: selectContatos(state.contatos, state.form.busca.values.buscar),
});

export default connect(mapStateToProps)(ListaContatos);
