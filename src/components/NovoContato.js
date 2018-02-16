import React from 'react';
import { connect } from 'react-redux';
import setActive from '../actions/active';

const NovoContato = props => (
  <div>
    <button
      onClick={() => props.dispatch(setActive('add'))}
      className="botao--grande botao--novo-contato"
    >
      Adicionar Contato
    </button>
  </div>
);

export default connect()(NovoContato);
