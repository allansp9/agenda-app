import React from 'react';
import { connect } from 'react-redux';

import FormContato from './FormContato';
import Header from './Header';
import { startAddContato } from '../actions/contatos';

const AddContato = props => (
  <div className="aside__add-contato">
    <Header>Adicionar Contato</Header>
    <FormContato formHandler={data => props.dispatch(startAddContato(data))} />
  </div>
);

export default connect()(AddContato);
