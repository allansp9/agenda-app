import React from 'react';
import { connect } from 'react-redux';
import setActive from '../actions/active';

const Footer = props => (
  <div>
    <button onClick={() => props.dispatch(setActive('add'))}>Novo</button>
  </div>
);

// const mapDispatchToProps = dispatch => ({
//   setActive: () => dispatch(setActive('add')),
// });

export default connect()(Footer);
