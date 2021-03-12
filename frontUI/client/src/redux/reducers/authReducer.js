import storage from 'redux-persist/lib/storage';
export const authReducer = (state = null, { type, payload, loading }) => {
  switch (type) {
    case 'LOGGED_IN_USER':
      return payload;

    case 'CLEAN_UP': {
      storage.removeItem('persist:root');
      return payload;
    }

    case 'AUTH_FAIL':
      return { payload, loading };

    case 'AUTH_SUCCESS':
      return payload;
    default:
      return state;
  }
};
