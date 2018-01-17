import * as types from '../actions/actionTypes';
import initialState from './initialState';
import camelize from 'camelize';

export default (state = initialState, action) => {
  switch (action.type) {

    // Load Time Slots
    case types.LOAD_TIME_SLOTS:
      return action.payload;
    
    case types.LOAD_TIME_SLOTS_SUCCESS:
      // Maps object ids to the actual ids from the API/DB.
      var new_object = {};

      camelize(action.payload.data.data).map(function(obj) {
        return new_object[obj.id] = obj;
      });

      return (new_object);

    case types.LOAD_TIME_SLOTS_FAILURE:
      return action.payload;

    default:
      break;
  }
  return state;
}


