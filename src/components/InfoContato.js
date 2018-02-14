import React, { Component } from 'react';
import { connect } from 'react-redux';
import setActive from '../actions/active';
import { removeContatoAction } from '../actions/contatos';
import encodeBase64 from '../selectors/encodeBase64';

class InfoContato extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: this.props.contato.nome,
      sobrenome: this.props.contato.sobrenome,
      email: this.props.contato.email,
      endereco: this.props.contato.endereco,
      telefone: this.props.contato.telefone,
      foto: '',
    };
  }

  componentDidMount() {
    encodeBase64(this.props.contato.foto).then(data => this.setState({ foto: data }));
  }

  render() {
    const { contato, dispatch } = this.props;
    const {
      nome, sobrenome, email, telefone, endereco, foto,
    } = this.state;
    return (
      <div>
        <img src={foto} alt="Profile" />
        <h1>{nome}</h1>
        <h3>{sobrenome}</h3>
        <h3>{email}</h3>
        <h3>{endereco}</h3>
        <h3>{telefone}</h3>
        <button onClick={() => dispatch(setActive('edit', contato.id))}>Editar</button>
        <button onClick={() => dispatch(removeContatoAction(contato.id))}>Remover</button>
      </div>
    );
  }
}

export default connect()(InfoContato);
