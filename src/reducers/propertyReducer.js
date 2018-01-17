import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default (state = initialState, action) => {
  switch (action.type) {

    // Set Client
    case types.SET_PROPERTY:
      return action.payload;

    default:
      break;
  }
  return state;
}


