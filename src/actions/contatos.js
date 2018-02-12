import db from '../../db';

export const startAddContato = (contatoData = {}) => (dispatch) => {
  const readFile = (inputFile) => {
    const reader = new FileReader();

    return new Promise((resolve, reject) => {
      reader.onerror = () => {
        reader.abort();
        reject();
      };
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(inputFile);
    });
  };

  readFile(contatoData.foto).then((fotoBase64) => {
    // envia os dados trocando a foto pela nova foto em base64
    const newData = contatoData;
    newData.foto = fotoBase64;
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
