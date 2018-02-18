import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Aside = ({ children, dispatch, activePage }) => (
  <div className={`aside ${activePage && 'is-active-mobile'} `}>{children}</div>
);

Aside.propTypes = {
  activePage: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Aside);
