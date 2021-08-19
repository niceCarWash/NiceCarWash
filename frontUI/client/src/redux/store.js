import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';

import thunk from 'redux-thunk';
import persistedReducer from './reducers/';

const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);
const persistor = persistStore(store);
export { store, persistor };
