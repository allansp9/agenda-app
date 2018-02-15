import db from '../../db';
import setActive from './active';
import encodeBase64 from '../selectors/encodeBase64';

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

export const editContatoAction = (updates, id) => (dispatch) => {
  db
    .table('contatos')
    .update(id, updates)
    .then(() => {
      dispatch({
        type: 'EDIT_CONTATO',
        updates,
        id,
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
    .then((contatos) => {
      dispatch({
        type: 'LOAD_CONTATOS',
        contatos,
      });
    });
};
