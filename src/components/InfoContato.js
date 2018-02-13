import React, { Component } from 'react';
import { connect } from 'react-redux';
import setActive from '../actions/active';
import encodeBase64 from '../selectors/encodeBase64';

// <img src={contato.foto} alt="avatar" />
class InfoContato extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foto: '',
    };
  }

  setActive;

  componentWillMount() {
    encodeBase64(this.props.contato.foto).then(data => this.setState({ foto: data }));
  }

  render() {
    const { contato } = this.props;
    return (
      <div>
        <img src={this.state.foto} alt="Profile" />
        <h1>{contato.nome}</h1>
        <h3>{contato.sobrenome}</h3>
        <h3>{contato.email}</h3>
        <h3>{contato.endereco}</h3>
        <h3>{contato.telefone}</h3>
        <button onClick={() => this.props.dispatch(setActive('edit', { ...contato }))}>
          Editar
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contato: state.active.activeUser,
  active: state.active.activePage,
});

// const mapDispatchToProps = dispatch => ({
//   setActive: (activePage, activeUser) => dispatch(setActive(activePage, activeUser)),
// });

export default connect(mapStateToProps)(InfoContato);
