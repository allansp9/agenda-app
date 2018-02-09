import React from 'react';
import { connect } from 'react-redux';
import FormContato from './FormContato';
import { editContato, removeContato } from '../actions/contatos';
import setActive from '../actions/active';

const deletarContato = (props) => {
  props.removeContato({ id: props.activeUser.id });
  props.setActive('');
};

const EditContato = props => (
  <div>
    <h1>Editano</h1>
    <FormContato onSubmit={data => props.dispatch(editContato(props.activeUser.id, data))} />
    <button onClick={() => deletarContato(props)}>Deletar</button>
  </div>
);

const mapStateToProps = state => ({
  activeUser: state.active.activeUser,
});

const mapDispatchToProps = dispatch => ({
  setActive: (active, dados) => dispatch(setActive(active, dados)),
  removeContato: id => dispatch(removeContato(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditContato);
