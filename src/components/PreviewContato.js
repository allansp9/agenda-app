import React from 'react';
import { connect } from 'react-redux';
import setActive from '../actions/active';

class PreviewContato extends React.Component {
  state = {
    foto: '',
  };

  render() {
    const { ...contato } = this.props;
    return (
      <div
        onClick={() => contato.dispatch(setActive('info', contato.id))}
        role="button"
        tabIndex={contato.id}
        onKeyUp={() => contato.dispatch(setActive('info', contato.id))}
        className="lista-contatos__item"
      >
        <div className="lista-contatos__foto">
          <img
            src={
              !this.props.foto ? require('../../public/images/placeholder.png') : this.props.foto
            }
            alt={contato.nome}
          />
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
  }
}

export default connect()(PreviewContato);
