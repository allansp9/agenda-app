import React from 'react';
import { connect } from 'react-redux';
import setActive from '../actions/active';

const PreviewContato = ({ activeUser, ...contato }) => (
  <div
    onClick={() => contato.dispatch(setActive('info', contato.id))}
    role="button"
    tabIndex={contato.id}
    onKeyUp={() => contato.dispatch(setActive('info', contato.id))}
    className={`lista-contatos__item ${contato.id === activeUser ? 'is-active' : ''}`}
  >
    <div className="avatar-wrapper--sidebar">
      {contato.foto && (
        <img src={contato.foto} alt={contato.nome} className="avatar-image--sidebar" />
      )}
    </div>

    <div>
      <div>
        <span className="lista-contatos__nome">{contato.nome}</span>
      </div>
      <div>
        <span className="lista-contatos__email">{contato.email}</span>
      </div>
    </div>
  </div>
);

export default connect(state => ({ activeUser: state.active.activeUser }))(PreviewContato);
