import React from 'react';
import { connect } from 'react-redux';
import setActive from '../actions/active';

const Aside = ({ children, dispatch }) => <div className="aside">{children}</div>;

export default connect()(Aside);
