export default (state = { activePage: '', activeUser: {} }, action) => {
  if (action.type === 'SET_ACTIVE') {
    return {
      ...state,
      activePage: action.activePage,
      activeUser: { ...action.activeUser },
    };
  }
  return state;
};
