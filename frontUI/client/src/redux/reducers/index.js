import { combineReducers } from 'redux';

import { authReducer } from './authReducer';
import { planReducer } from './planReducer';
import { serviceReducer } from './serviceReducer';
import { persistReducer } from 'redux-persist';
import { userReducer } from './userReducer';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['plans', 'serivces'],
  blacklist: ['loading'],
};

const rootReducer = combineReducers({
  auth: authReducer,
  loading: userReducer,
  plans: planReducer,
  servicesList: serviceReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
