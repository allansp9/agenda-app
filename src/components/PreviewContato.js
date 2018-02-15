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
      <div>
        <img
          src={!this.props.foto ? require('../../public/images/placeholder.png') : this.props.foto}
          alt=""
        />
        <h3>{contato.nome}</h3>
        <button onClick={() => contato.dispatch(setActive('info', contato.id))}> Info </button>
      </div>
    );
  }
}

export default connect()(PreviewContato);
