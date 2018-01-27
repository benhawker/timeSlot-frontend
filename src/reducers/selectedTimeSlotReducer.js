import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default (state = initialState, action) => {
  switch (action.type) {

    // Set the selected Time Slot
    case types.SET_SELECTED_TIME_SLOT:
      return action.payload;
  
    default:
      break;
  }
  return state;
}


