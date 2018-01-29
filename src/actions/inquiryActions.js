import axios from 'axios';
import * as types from './actionTypes';
import { addFlashNotification } from './flashNotificationActions';

function createInquiry(inquiryId, formParams) {
  return (dispatch) => {
    return axios.post(
      `http://localhost:3004/api/inquiries/`,
      {
        inquiry: {
          id: inquiryId,
          time_slot_id: formParams.selectedTimeSlotId,
          customer_name: formParams.customerName,
          customer_phone: formParams.customerPhone,
          customer_email: formParams.customerEmail,
        }
      }
    ).then(
      success => {
        dispatch(createInquirySuccess(success));
        dispatch(addFlashNotification('Inquiry sent successfully.', 'success'));
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
