import axios from 'axios';
import * as types from './actionTypes';
import { addFlashNotification } from './flashNotificationActions';

function createInquiry(inquiryId, timeSlotId, formParams) {
  return (dispatch) => {
    return axios.post(
      `/api/inquiries/`,
      {
        inquiry: {
          id: "some_id",
          time_slot_id: "some_ts_id"
        }
      }
    ).then(
      success => {
        dispatch(createInquirySuccess(success));
        dispatch(addFlashNotification('Inquiry Created successfully.', 'success'));
      },
      error => {
        dispatch(createInquiryFailure(error));
        dispatch(addFlashNotification('Sorry something went wrong.', 'error'));
      },
    );
  };
}

function createInquirySuccess(payload) {
  return {
    type: types.CREATE_INQUIRY_SUCCESS,
    payload,
  }
}

function createInquiryFailure(payload) {
  return {
    type: types.CREATE_INQUIRY_FAILURE,
    payload,
  }
}

export { 
         createInquiry,
         createInquirySuccess,
         createInquiryFailure,
       }
