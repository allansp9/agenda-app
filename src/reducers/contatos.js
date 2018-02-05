export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_CONTATO':
      return [...state, action.contato];
    case 'REMOVE_CONTATO':
      return state.filter(contato => action.id !== contato.id);
    case 'EDIT_CONTATO':
      return [];

    default:
      return state;
  }
};
