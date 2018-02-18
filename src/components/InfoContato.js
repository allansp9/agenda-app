import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from './Header';
import setActive from '../actions/active';
import { removeContatoAction } from '../actions/contatos';

const InfoContato = (props) => {
  const { contato, dispatch } = props;
  const {
    id, nome, sobrenome, email, telefone, endereco, foto,
  } = contato;
  return (
    <div className="info-contato">
      <Header>Informações</Header>

      <div className="info-contato__head">
        {foto && <img src={foto} alt={nome} className="avatar--info" />}
        <h1 className="info-contato__title">{nome}</h1>
      </div>
      <div className="info-contato__footer">
        <button onClick={() => dispatch(setActive('edit', id))} className="botao--editar">
          Editar
        </button>
        <button onClick={() => dispatch(removeContatoAction(id))} className="botao--editar">
          Remover
        </button>
      </div>
      <div className="info-contato__body">
        <span className="label">Nome</span>
        <span className="info-contato__text">{`${nome} ${sobrenome}`}</span>
        <span className="label">E-mail</span>
        <span className="info-contato__text">{email}</span>
        <span className="label">Endereço</span>
        <span className="info-contato__text">{endereco}</span>
        <span className="label">Telefone</span>
        <span className="info-contato__text">{telefone}</span>
      </div>
    </div>
  );
};

InfoContato.propTypes = {
  contato: PropTypes.objectOf(PropTypes.node).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(InfoContato);
