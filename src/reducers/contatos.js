export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_CONTATO':
      return [...state, action.contato];
    case 'REMOVE_CONTATO':
      return state.filter(({ id }) => action.id !== id);
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

    default:
      return state;
  }
};
