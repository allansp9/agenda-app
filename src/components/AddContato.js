import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormContato from './FormContato';
import addContato from '../actions/contatos';

class AddContato extends Component {
  render() {
    return (
      <div>
        <h1>Adicionando</h1>
        <FormContato onSubmit={contato => console.log(contato)} />
      </div>
    );
  }
}

// const mapDispatchToProps = dispatch => ({
//   add: contato => dispatch(addContato(contato)),
// });

export default connect()(AddContato);
