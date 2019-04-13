import {CREATE_RECIPIENT_LIST} from './allActions';


export const createRecipientList = (list) => dispatch => {
  dispatch({
    type: CREATE_RECIPIENT_LIST,
    payload: list
  });
}
