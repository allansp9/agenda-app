import uuid from 'uuid';

export const addContato = ({
  nome, sobrenome, email, telefone, endereco,
}) => ({
  type: 'ADD_CONTATO',
  contato: {
    id: uuid(),
    nome,
    sobrenome,
    email,
    telefone,
    endereco,
  },
});

export const removeContato = ({ id }) => ({
  type: 'REMOVE_CONTATO',
  id,
});

export const editContato = (id, updates) => ({
  type: 'EDIT_CONTATO',
  id,
  updates,
});
