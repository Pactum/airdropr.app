import { CREATE_RECIPIENT_LIST } from '../actions/allActions';

const initialState = {
  recipientList: [
    {
      address: 'x0',
      amount: 200
    }
  ]
};

export function recipientList(state = initialState.recipientList, action) {
  let newState;
  switch (action.type) {
    case CREATE_RECIPIENT_LIST:
      newState = action.payload;
      console.log('CREATE_RECIPIENT_LIST');
      return newState;
    default:
      return state;
  }
}
