import * as actions from '../actions/actionTypes';

const initialState = {
  loading: true,
  error: null,
  email: 'ihkldoo@gmail.com',
  password: '12345678',
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.CLEAN_UP:
      return (state = null);

    case actions.AUTH_START:
      return state;

    case actions.AUTH_END:
      return state;

    case actions.AUTH_FAIL:
      return state, payload;

    case actions.AUTH_SUCCESS:
      return state, payload;
    default:
      return state;
  }
};
