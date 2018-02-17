import React from 'react';
import { connect } from 'react-redux';
import setActive from '../actions/active';

const BotaoGrande = ({ action, children, dispatch }) => (
  <button onClick={() => dispatch(setActive(action))} className="botao--grande">
    {children}
  </button>
);

export default connect()(BotaoGrande);
