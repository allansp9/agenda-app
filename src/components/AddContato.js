import React from 'react';
import { connect } from 'react-redux';

import FormContato from './FormContato';
import { startAddContato } from '../actions/contatos';

const adicionarContato = (props) => {
  props.dispatch(startAddContato(props.data));
  // props.dispatch(setActiveAction('info', props.data));
};

const AddContato = props => (
  <div>
    <h1>Adicionando</h1>
    <FormContato onSubmit={data => props.dispatch(startAddContato(data))} />
  </div>
);

export default connect()(AddContato);
