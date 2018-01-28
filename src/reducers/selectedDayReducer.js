import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default (state = initialState, action) => {
  switch (action.type) {

    // Set the selected day
    case types.SET_SELECTED_DAY:
      return action.payload;
  
    default:
      break;
  }
  return state;
}


