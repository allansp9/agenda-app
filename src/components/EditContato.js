import React from 'react';
import { connect } from 'react-redux';
import FormContato from './FormContato';
import { editContatoAction, removeContatoAction } from '../actions/contatos';
import setActiveAction from '../actions/active';

const deletarContato = (props) => {
  props.removeContato({ id: props.activeUser.id });
  props.setActive('');
};

const editarContato = (props) => {
  props.setActive('info', props.data);
  props.editContato(props.data.id, props.data);
  console.log(props);
};

const EditContato = props => (
  <div>
    <h1>Editano</h1>
    <FormContato onSubmit={data => editarContato({ ...props, data })} />
    <button onClick={() => deletarContato(props)}>Deletar</button>
  </div>
);

const mapStateToProps = state => ({
  activeUser: state.active.activeUser,
});

const mapDispatchToProps = dispatch => ({
  setActive: (active, dados) => dispatch(setActiveAction(active, dados)),
  editContato: (id, dados) => dispatch(editContatoAction(id, dados)),
  removeContato: id => dispatch(removeContatoAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditContato);
