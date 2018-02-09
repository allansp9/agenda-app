import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { addContato } from '../actions/contatos';

// const onSubmit = values => console.log(values);

const ContactForm = props => (
  <form onSubmit={props.handleSubmit(props.onSubmit)}>
    <div>
      <label htmlFor="nome">
        Nome
        <Field name="nome" component="input" type="text" />
      </label>
    </div>
    <div>
      <label htmlFor="sobrenome">
        Sobrenome
        <Field name="sobrenome" component="input" type="text" />
      </label>
    </div>
    <div>
      <label htmlFor="email">
        Email
        <Field name="email" component="input" type="email" />
      </label>
    </div>
    <div>
      <label htmlFor="tel">
        Telefone
        <Field name="tel" component="input" type="tel" />
      </label>
    </div>
    <div>
      <label htmlFor="endereco">
        Endereço
        <Field name="endereco" component="input" type="text" />
      </label>
    </div>
    <button type="submit">Submit</button>
  </form>
);

// const mapDispatchToProps = dispatch => ({
//   onSubmit: (values) => {
//     dispatch(addContato(values));
//   },
// });

const mapStateToProps = state => ({
  contatos: state.contatos,
});

const WrappedContactForm = reduxForm({
  form: 'contatos',
})(ContactForm);

const ConnectedContactForm = connect(state => ({
  initialValues: state.contatos[4] || {},
}))(WrappedContactForm);

export default ConnectedContactForm;
