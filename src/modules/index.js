import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import timeSlots from '../reducers/timeSlotsReducer';
import properties from '../reducers/propertiesReducer';
import property from '../reducers/propertyReducer';
import flashNotification from '../reducers/flashNotificationsReducer';

export default combineReducers({
  routing: routerReducer,
  flashNotification,
  properties,
  selectedProperty: combineReducers({
    property,
    timeSlots,
  }),
})