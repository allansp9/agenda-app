import React from 'react';
import { connect } from 'react-redux';
import encodeBase64 from '../selectors/encodeBase64';
import setActive from '../actions/active';

class PreviewContato extends React.Component {
  state = {
    foto: '',
  };

  componentDidMount() {
    encodeBase64(this.props.foto).then(data => this.setState(() => ({ foto: data })));
  }

  render() {
    const { ...contato } = this.props;
    return (
      <div>
        <img src={this.state.foto} alt="" />
        <h3>{contato.nome}</h3>
        <button onClick={() => contato.dispatch(setActive('info', contato.id))}> Info </button>
      </div>
    );
  }
}

export default connect()(PreviewContato);
