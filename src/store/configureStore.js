import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import contatosReducer from '../reducers/contatos';
import filterReducer from '../reducers/filter';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      contatos: contatosReducer,
      filter: filterReducer,
    }),
    composeEnhancers(applyMiddleware(thunk)),
  );

  return store;
};
