import React from 'react';
import { connect } from 'react-redux';
import setActive from '../actions/active';

const BotaoGrande = ({
  action, children, dispatch, className,
}) => (
  <button onClick={() => dispatch(setActive(action))} className={className}>
    {children}
  </button>
);

export default connect()(BotaoGrande);
