import React from 'react';
import { connect } from 'react-redux';
import FormContato from './FormContato';
import { editContatoAction, removeContatoAction, loadContatos } from '../actions/contatos';
import setActiveAction from '../actions/active';

const EditContato = props => (
  <div>
    <h1>Editano</h1>
    <FormContato
      contato={props.contato}
      formHandler={data => props.dispatch(editContatoAction(data, props.contato.id))}
    />
  </div>
);

export default connect()(EditContato);
