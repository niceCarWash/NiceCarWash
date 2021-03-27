import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';

import thunk from 'redux-thunk';
import persistedReducer from './reducers/index';

const store = createStore(persistedReducer, compose(applyMiddleware(thunk)));
const persistor = persistStore(store);
export { store, persistor };
