import React from 'react';
import { connect } from 'react-redux';
import setActive from '../actions/active';
import { removeContatoAction } from '../actions/contatos';

const InfoContato = (props) => {
  const { contato, dispatch } = props;
  const {
    id, nome, sobrenome, email, telefone, endereco, foto,
  } = contato;
  return (
    <div>
      {foto && <img src={foto} alt={nome} className="" />}
      <h1>{nome}</h1>
      <h3>{sobrenome}</h3>
      <h3>{email}</h3>
      <h3>{endereco}</h3>
      <h3>{telefone}</h3>
      <button onClick={() => dispatch(setActive('edit', id))}>Editar</button>
      <button onClick={() => dispatch(removeContatoAction(id))}>Remover</button>
    </div>
  );
};

export default connect()(InfoContato);
