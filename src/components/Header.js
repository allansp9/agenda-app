import React from 'react';
import { Field, reduxForm } from 'redux-form';

const Header = () => (
  <div>
    <form />
    <Field name="buscar" component="input" type="text" placeholder="Pesquisar" />
  </div>
);

const WrappedHeader = reduxForm({
  form: 'busca',
  initialValues: {
    buscar: '',
  },
})(Header);

export default WrappedHeader;
