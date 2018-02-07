import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import contatosReducer from '../reducers/contatos';
import filterReducer from '../reducers/filter';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      contatos: contatosReducer,
      filter: filterReducer,
      form: formReducer,
    }),
    composeEnhancers(applyMiddleware(thunk)),
  );

  return store;
};
