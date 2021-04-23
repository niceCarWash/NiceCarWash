const initialState = {
  data: [],
};
export const serviceReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SERVICE_LIST':
      return payload;
    default:
      return state;
  }
};
