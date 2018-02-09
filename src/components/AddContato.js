import React from 'react';
import { connect } from 'react-redux';
import FormContato from './FormContato';
import { addContato } from '../actions/contatos';

const AddContato = props => (
  <div>
    <h1>Adicionando</h1>
    <FormContato onSubmit={data => props.dispatch(addContato(data))} />
  </div>
);

export default connect()(AddContato);
