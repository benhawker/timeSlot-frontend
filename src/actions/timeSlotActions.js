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
        success => {
          dispatch(loadTimeSlotsSuccess(success));
          dispatch(addFlashNotification('Time Slots loaded.', 'success'));
        },
        error => {
          dispatch(loadTimeSlotsFailure(error));
          dispatch(addFlashNotification('Could not fetch time slots.', 'error'));
        },
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

function setSelectedTimeSlot(payload) {
  return {
    type: types.SET_SELECTED_TIME_SLOT,
    payload,
  }
}

function setSelectedDay(payload) {
  return {
    type: types.SET_SELECTED_DAY,
    payload,
  }
}

export { 
         loadTimeSlots,
         loadTimeSlotsFailure,
         loadTimeSlotsSuccess,
         loadTimeSlotsRequest,
         setSelectedTimeSlot,
         setSelectedDay,
       }

