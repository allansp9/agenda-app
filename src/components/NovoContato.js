import React from 'react';
import { connect } from 'react-redux';
import setActive from '../actions/active';

const NovoContato = props => (
  <div className="novo-contato">
    <button onClick={() => props.dispatch(setActive('add'))} className="novo-contato__botao">
      Adicionar Contato
    </button>
  </div>
);

export default connect()(NovoContato);