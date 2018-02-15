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
        <img
          src={!this.props.foto ? require('../../public/images/placeholder.png') : this.props.foto}
          alt=""
        />
        <h3>{contato.nome}</h3>
        <h3>{contato.email}</h3>
      </div>
    );
  }
}

export default connect()(PreviewContato);
