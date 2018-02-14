import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';
import isEmail from 'sane-email-validation';
import { normalizePhone } from '../selectors/normalizeForm';

const renderInput = ({ input, meta, label }) => (
  <div>
    <label htmlFor={label}>
      {label}
      <input {...input} />
    </label>
    {meta.touched && meta.error && <span className="error">{meta.error}</span>}
  </div>
);

const renderDropzoneInput = (field) => {
  const files = field.input.value;
  return (
    <div>
      <Dropzone
        name={field.name}
        onDrop={(filesToUpload, e) => {
          field.input.onChange(filesToUpload[0]);
        }}
      >
        <div>Try dropping some files here, or click to select files to upload.</div>
      </Dropzone>
      {field.meta.touched && field.meta.error && <span className="error">{field.meta.error}</span>}
    </div>
  );
};

const validate = (values) => {
  const errors = {};
  if (!values.nome) {
    errors.nome = 'Required';
  } else if (!values.nome.match(/^[a-zA-Z ]+$/)) {
    errors.nome = 'Nome inválido';
  }
  if (!values.sobrenome) {
    errors.sobrenome = 'Required';
  } else if (values.sobrenome === values.nome || !values.sobrenome.match(/^[a-zA-Z ]+$/)) {
    errors.sobrenome = 'Sobrenome inválido';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!isEmail(values.email)) {
    errors.email = 'Invalid Email';
  }
  if (!values.foto) {
    errors.foto = 'Required';
  } else if (values.foto && values.foto.size > 200000) {
    errors.foto = 'File size too big! (max: 200kb)';
  }
  return errors;
};

const ContactForm = ({ handleSubmit, onSubmit }) => (
  <form onSubmit={handleSubmit}>
    <Field name="nome" label="Nome" component={renderInput} />

    <Field name="sobrenome" label="Sobrenome" component={renderInput} />

    <Field name="email" label="email" component={renderInput} />

    <Field name="endereco" label="Endereco" component={renderInput} />

    <Field name="telefone" label="Telefone" component={renderInput} normalize={normalizePhone} />

    <div>
      <label htmlFor="foto">
        Foto
        <Field name="foto" component={renderDropzoneInput} />
      </label>
    </div>
    <button type="submit">Submit</button>
  </form>
);

const mapStateToProps = (state, props) => ({
  contatos: state.contatos,
  initialValues: props.contato || {},
});

const WrappedContactForm = reduxForm({
  form: 'contatos',
  validate,
})(ContactForm);

export default connect(mapStateToProps)(WrappedContactForm);
