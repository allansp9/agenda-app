import React from 'react';
import { connect } from 'react-redux';
import FormContato from './FormContato';
import { editContatoAction, removeContatoAction, loadContatos } from '../actions/contatos';
import setActiveAction from '../actions/active';

const amostra = (abenga) => {
  console.log(abenga);
};

const EditContato = props => (
  <div>
    <h1>Editano</h1>
    <FormContato
      contato={props.contato}
      onSubmit={wut => props.dispatch(editContatoAction(props.contato.id, wut))}
    />
    <button>Deletar</button>
  </div>
);

export default connect()(EditContato);
