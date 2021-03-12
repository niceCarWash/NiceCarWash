import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { persistReducer } from 'redux-persist';
import { userReducer } from './userReducer';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['loading'],
};

const rootReducer = combineReducers({
  auth: authReducer,
  loading: userReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
