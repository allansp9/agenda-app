import React from 'react';
import { connect } from 'react-redux';
import setActive from '../actions/active';

const Aside = ({ children, dispatch, activePage }) => (
  <div className={`aside ${activePage && 'is-active-mobile'} `}>{children}</div>
);

export default connect()(Aside);
