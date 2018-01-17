import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default (state = initialState, action) => {
  switch (action.type) {

    // Add a flash notification
    case types.ADD_FLASH_NOTIFICATION:
      return Object.assign({}, state.flashNotification, {
        message: action.message,
        level: action.level
      });

    default:
      break;
  }
  return state;
}