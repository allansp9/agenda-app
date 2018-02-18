import React, { Component } from 'react';
import { Field, reduxForm, change } from 'redux-form';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';
import isEmail from 'sane-email-validation';
import { normalizePhone } from '../selectors/normalizeForm';
import encodeBase64 from '../selectors/encodeBase64';

const renderInput = ({ input, meta, label }) => (
  <div className="form__field">
    <label htmlFor={label}>
      <input {...input} placeholder={label} />
    </label>
    {meta.touched && meta.error && <span className="error">{meta.error}</span>}
  </div>
);

const renderDropzoneInput = ({
  input, meta, label, change, contato, activePage,
}) => (
  <div className="form__file">
    <Dropzone
      name={label}
      className="form__foto"
      onDrop={(filesToUpload, e) => {
        input.onChange(filesToUpload[0]);
      }}
      multiple={false}
    >
      {!meta.error &&
        input.value.preview && (
          <img src={input.value.preview} alt="preview" className="avatar avatar--grande" />
        )}
    </Dropzone>
    <div className="form__file__desc">
      <p>Tamanho máximo: 200kb</p>
      <p>Apenas JPG ou PNG</p>
      {meta.dirty && meta.error && <span className="error">{meta.error}</span>}
      <div>
        {input.value && (
          <button onClick={() => input.onChange('')} type="button" className="botao--pequeno">
            Remover arquivo
          </button>
        )}
      </div>
    </div>
  </div>
);

const validate = (values) => {
  const errors = {};
  if (!values.nome) {
    errors.nome = 'Obrigatório';
  } else if (!values.nome.match(/^[a-zA-Z ]+$/)) {
    errors.nome = 'Nome inválido';
  }
  if (!values.sobrenome) {
    errors.sobrenome = 'Obrigatório';
  } else if (values.sobrenome === values.nome || !values.sobrenome.match(/^[a-zA-Z ]+$/)) {
    errors.sobrenome = 'Sobrenome inválido';
  }
  if (!values.email) {
    errors.email = 'Obrigatório';
  } else if (!isEmail(values.email)) {
    errors.email = 'Email inválido';
  }

  if (values.foto && !['image/jpeg', 'image/jpg', 'image/png'].includes(values.foto.type)) {
    errors.foto = 'Formato inválido!';
  } else if (values.foto && values.foto.size > 200000) {
    errors.foto = 'Arquivo muito grande!';
  }
  return errors;
};

class ContactForm extends Component {
  mySubmit = (values, formHandler) => {
    if (values.foto instanceof Blob) {
      encodeBase64(values.foto).then((data) => {
        const newValues = values;
        newValues.foto = data;
        this.props.formHandler(newValues);
      });
    } else {
      this.props.formHandler(values);
    }
  };

  render() {
    const {
      handleSubmit, onSubmit, formHandler, change, contato, activePage,
    } = this.props;
    return (
      <form onSubmit={handleSubmit(this.mySubmit)} className="form">
        <Field name="foto" label="Foto" component={renderDropzoneInput} activePage={activePage} />

        <Field name="nome" label="Nome" component={renderInput} />

        <Field name="sobrenome" label="Sobrenome" component={renderInput} />

        <Field name="email" label="Email" component={renderInput} />

        <Field name="endereco" label="Endereço" component={renderInput} />

        <Field
          name="telefone"
          label="Telefone"
          component={renderInput}
          normalize={normalizePhone}
        />

        <button type="submit" className="botao">
          Enviar
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state, props) => ({
  contatos: state.contatos,
  initialValues: props.contato || {},
  activePage: state.active.activePage,
});

const WrappedContactForm = reduxForm({
  form: 'contatos',
  validate,
})(ContactForm);

export default connect(mapStateToProps)(WrappedContactForm);
