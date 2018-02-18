import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import setActive from '../actions/active';

const BotaoGrande = ({
  action, children, dispatch, className,
}) => (
  <button onClick={() => dispatch(setActive(action))} className={className}>
    {children}
  </button>
);

BotaoGrande.propTypes = {
  action: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(BotaoGrande);
