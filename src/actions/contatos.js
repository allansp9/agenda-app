import db from '../../db';

export const startAddContato = contatoData => (dispatch) => {
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

export const editContatoAction = (id, updates) => dispatch =>
  db
    .table('contatos')
    .update(id, updates)
    .then(() => {
      dispatch({
        type: 'EDIT_CONTATO',
        contato: {
          id,
          updates,
        },
      });
    });

export const loadContatos = () => (dispatch) => {
  db
    .table('contatos')
    .toArray()
    .then(contatos =>
      dispatch({
        type: 'LOAD_CONTATOS',
        contatos,
      }));
};
