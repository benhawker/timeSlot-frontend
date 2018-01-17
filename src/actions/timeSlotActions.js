import axios from 'axios';
import * as types from './actionTypes';

import { addFlashNotification } from './flashNotificationActions';

function loadTimeSlots(property) {
  // const url =  `http://localhost:3004/api/properties/${property.id}/time_slots`;
  const url =  'http://localhost:3004/api/time_slots';
  const axiosGet = axios.get(url);

  return (dispatch) => {
    return axiosGet
      .then(
        success => dispatch(loadTimeSlotsSuccess(success)),
        error => dispatch(loadTimeSlotsFailure(error))
      );
  };
}

function loadTimeSlotsFailure(payload){
  return {
    type: types.LOAD_TIME_SLOTS_FAILURE,
    payload,
  }
}

function loadTimeSlotsSuccess(payload){
  return {
    type: types.LOAD_TIME_SLOTS_SUCCESS,
    payload,
  }
}

function loadTimeSlotsRequest(){
  return {
    type: types.LOAD_TIME_SLOTS,
    payload: types.LOAD_TIME_SLOTS
  }
}

export { 
         loadTimeSlots,
         loadTimeSlotsFailure,
         loadTimeSlotsSuccess,
         loadTimeSlotsRequest,
       }

