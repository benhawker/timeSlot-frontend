import * as types from '../actions/actionTypes';
import initialState from './initialState';
import camelize from 'camelize';

export default (state = initialState, action) => {
  switch (action.type) {

    case types.CREATE_INQUIRY_SUCCESS:
      return [
        ...state,
        camelize(action.payload.data.data)
      ];

    case types.CREATE_INQUIRY_FAILURE:
      return [];


    default:
      break;
  }
  return state;
}

