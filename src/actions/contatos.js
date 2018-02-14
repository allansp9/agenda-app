import db from '../../db';
import setActive from './active';

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
      dispatch({
        type: 'SET_ACTIVE',
        activePage: 'info',
        activeUser: id,
      });
    });
};

export const removeContatoAction = id => (dispatch) => {
  db
    .table('contatos')
    .delete(id)
    .then(() => {
      dispatch({
        type: 'REMOVE_CONTATO',
        id,
      });
      dispatch({
        type: 'SET_ACTIVE',
        activePage: '',
        activeUser: '',
      });
    });
};

export const editContatoAction = (id, updates) => (dispatch) => {
  db
    .table('contatos')
    .update(id, updates)
    .then(() => {
      dispatch({
        type: 'EDIT_CONTATO',
        id,
        updates,
      });
      dispatch({
        type: 'SET_ACTIVE',
        activePage: 'info',
        activeUser: id,
      });
    });
};

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
