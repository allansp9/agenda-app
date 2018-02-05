import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import contatosReducer from '../reducers/contatos';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(contatosReducer, composeEnhancers(applyMiddleware(thunk)));

  return store;
};
