import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import FormContato from './FormContato';
import Header from './Header';
import { startAddContato } from '../actions/contatos';

const AddContato = props => (
  <div className="aside__add-contato">
    <Header>Adicionar Contato</Header>
    <FormContato formHandler={data => props.dispatch(startAddContato(data))} />
  </div>
);

AddContato.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(AddContato);
