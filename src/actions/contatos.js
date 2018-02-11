import uuid from 'uuid';
import db from '../../db';

export const startAddContato = (contatoData = {}) => (dispatch) => {
  db
    .table('contatos')
    .add(contatoData)
    .then((id) => {
      dispatch({
        type: 'ADD_CONTATO',
        contato: {
          id,
          ...contatoData,
        },
      });
    });
};

export const removeContatoAction = ({ id }) => ({
  type: 'REMOVE_CONTATO',
  id,
});

export const editContatoAction = (id, updates) => ({
  type: 'EDIT_CONTATO',
  id,
  updates,
});
