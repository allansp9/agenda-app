import React from 'react';
import { connect } from 'react-redux';

import FormContato from './FormContato';
import { startAddContato } from '../actions/contatos';

const AddContato = props => (
  <div className="aside__add-contato">
    <header className="aside__header">Adicionar Contato</header>
    <FormContato formHandler={data => props.dispatch(startAddContato(data))} />
  </div>
);

export default connect()(AddContato);
