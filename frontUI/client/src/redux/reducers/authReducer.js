export const authReducer = (state = null, { type, payload, loading }) => {
  switch (type) {
    case 'LOGGED_IN_USER':
      return payload;

    case 'CLEAN_UP': {
      return payload;
    }

    case 'AUTH_FAIL':
      return payload;

    case 'AUTH_SUCCESS':
      return payload;
    default:
      return state;
  }
};
