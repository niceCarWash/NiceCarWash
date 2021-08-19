export const planReducer = (state = null, { type, payload }) => {
  switch (type) {
    case 'PLAN_CREATE':
      return payload;

    case 'PLAN_READ': {
      return payload;
    }

    case 'PLANS_LIST':
      return payload;

    case 'PLAN_EDIT':
      return payload;
    case 'PLAN_REMOVE':
      return payload;
    default:
      return state;
  }
};
