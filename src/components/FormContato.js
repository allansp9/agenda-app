import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { addContato } from '../actions/contatos';

// const onSubmit = values => console.log(values);

const ContactForm = ({ handleSubmit, onSubmit }) => (
  <form>
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
      <label htmlFor="endereco">
        Endereço
        <Field name="endereco" component="input" type="text" />
      </label>
    </div>
    <div>
      <label htmlFor="telefone">
        Telefone
        <Field name="telefone" component="input" type="tel" />
      </label>
    </div>
    <button type="submit" onClick={handleSubmit}>
      Submit
    </button>
  </form>
);

// const mapDispatchToProps = dispatch => ({
//   onSubmit: (values) => {
//     dispatch(addContato(values));
//   },
// });

const mapStateToProps = state => ({
  contatos: state.contatos,
  initialValues: state.active.activeUser,
});

const WrappedContactForm = reduxForm({
  form: 'contatos',
})(ContactForm);

export default connect(mapStateToProps)(WrappedContactForm);
