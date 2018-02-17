import React from 'react';
import { connect } from 'react-redux';
import setActive from '../actions/active';

const Aside = ({ children, dispatch }) => (
  <div className="aside">
    {children}

    <button onClick={() => dispatch(setActive('', ''))} className="botao--grande">
      Voltar
    </button>
  </div>
);

export default connect()(Aside);
