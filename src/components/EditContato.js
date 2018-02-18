import React from 'react';
import { connect } from 'react-redux';
import FormContato from './FormContato';
import { editContatoAction } from '../actions/contatos';
import Header from './Header';

const EditContato = props => (
  <div className="aside__add-contato">
    <Header>Editar Contato</Header>
    <FormContato
      contato={props.contato}
      formHandler={data => props.dispatch(editContatoAction(data, props.contato.id))}
    />
  </div>
);

export default connect()(EditContato);
