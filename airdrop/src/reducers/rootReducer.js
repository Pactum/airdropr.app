import {combineReducers} from 'redux';
import {recipientList} from './airdropReducer';

const rootReducer = combineReducers({
  recipientList
});

export default rootReducer;
