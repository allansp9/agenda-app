export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_CONTATO':
      return [...state, action.contato];
    case 'REMOVE_CONTATO':
      return state.filter(contato => action.id !== contato.id);
    case 'EDIT_CONTATO':
      return state.map((contato) => {
        if (contato.id === action.id) {
          return {
            ...contato,
            ...action.updates,
          };
        }
        return contato;
      });
    case 'LOAD_CONTATOS':
      return action.contatos;

    default:
      return state;
  }
};
