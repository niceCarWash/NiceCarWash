const inittialState = {
  loading: false,
};

export const userReducer = (state = inittialState, action) => {
  switch (action.type) {
    case 'APP_START':
      return action.loading;
    case 'AUTH_START':
      return action.loading;
    case 'AUTH_END':
      return action.loading;
    case 'AUTH_FAIL':
      return action.loading;
    case 'AUTH_SUCCESS':
      return action.loading;
    case 'LOGGED_IN_USER':
      return action.loading;
    case 'CLEAN_UP':
      return action.loading;
    case 'LOGIN_START':
      return action.loading;
    case 'ORDER_LIST':
      return action.payload;
    case 'USER_PROFILE_UPDATE':
      return action.payload;
    default:
      return state;
  }
};
