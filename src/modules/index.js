import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import timeSlots from '../reducers/timeSlotsReducer';
import selectedTimeSlot from '../reducers/selectedTimeSlotReducer';
import selectedDay from '../reducers/selectedDayReducer';
import properties from '../reducers/propertiesReducer';
import inquiries from '../reducers/inquiriesReducer';
import flashNotification from '../reducers/flashNotificationsReducer';

export default combineReducers({
  routing: routerReducer,
  flashNotification,
  properties,
  timeSlots,
  inquiries,
  selectedTimeSlot,
  selectedDay,
})