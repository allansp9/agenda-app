import React from 'react';
import { connect } from 'react-redux';
import FormContato from './FormContato';
import { addContato } from '../actions/contatos';
import setActiveAction from '../actions/active';

const adicionarContato = (props) => {
  props.dispatch(addContato(props.data));
  props.dispatch(setActiveAction('info', props.data));
};

const AddContato = props => (
  <div>
    <h1>Adicionando</h1>
    <FormContato onSubmit={data => adicionarContato({ ...props, data })} />
  </div>
);

export default connect()(AddContato);
