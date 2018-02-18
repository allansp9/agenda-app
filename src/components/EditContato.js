import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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

EditContato.propTypes = {
  contato: PropTypes.objectOf(PropTypes.node).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(EditContato);
