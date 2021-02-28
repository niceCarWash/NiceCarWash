import * as actions from '../actionTypes';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

const roleBasedRedirect = (e, { auth }) => (dispatch) => {
  let history = useHistory();
  dispatch({ type: actions.REDIRECT });
  history.push(e);
  toast.success(`Welcome ${auth.name}`);
};

export { roleBasedRedirect };
