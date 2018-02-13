import React from 'react';
import { connect } from 'react-redux';
import setActive from '../actions/active';
import encodeBase64 from '../selectors/encodeBase64';

class PreviewContato extends React.Component {
  state = {
    foto: '',
  };

  componentDidMount() {
    encodeBase64(this.props.foto).then(data => this.setState({ foto: data }));
  }

  render() {
    return (
      <div>
        <img src={this.state.foto} alt="" />
        <h3>{this.props.nome}</h3>
      </div>
    );
  }
}

export default connect()(PreviewContato);
