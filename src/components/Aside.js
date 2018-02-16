import React from 'react';
import { connect } from 'react-redux';
import setActive from '../actions/active';

const Aside = ({ children, dispatch }) => (
  <div className="aside">
    <button onClick={() => dispatch(setActive('', ''))}>Voltar</button>
    {children}
  </div>
);

export default connect()(Aside);
