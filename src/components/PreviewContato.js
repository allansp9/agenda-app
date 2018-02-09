import React from 'react';
import { connect } from 'react-redux';
import setActive from '../actions/active';

const PreviewContato = ({
  id, nome, setActive, sobrenome, email, endereco, telefone,
}) => (
  <div>
    <h3>{nome}</h3>
    <button
      onClick={() =>
        setActive('info', {
          id,
          nome,
          sobrenome,
          email,
          endereco,
          telefone,
        })
      }
    >
      Info
    </button>
  </div>
);

const mapDispatchToProps = dispatch => ({
  setActive: (active, dados) => dispatch(setActive(active, dados)),
});

export default connect(undefined, mapDispatchToProps)(PreviewContato);
