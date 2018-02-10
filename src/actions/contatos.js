import uuid from 'uuid';

export const addContato = ({
  nome, sobrenome, email, endereco, telefone, foto,
}) => ({
  type: 'ADD_CONTATO',
  contato: {
    id: uuid(),
    nome,
    sobrenome,
    email,
    endereco,
    telefone,
    foto,
  },
});

export const removeContatoAction = ({ id }) => ({
  type: 'REMOVE_CONTATO',
  id,
});

export const editContatoAction = (id, updates) => ({
  type: 'EDIT_CONTATO',
  id,
  updates,
});
