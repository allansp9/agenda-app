export default (state = { text: '' }, action) => {
  if (action.type === 'SET_TEXT_FILTER') {
    return {
      ...state,
      text: action.text,
    };
  }
  return state;
};
