import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const rootReducer = combineReducers({
  ...reducers,
});

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(() => {
  localStorage.setItem('state', JSON.stringify(store.getState()));
});

export default store;
