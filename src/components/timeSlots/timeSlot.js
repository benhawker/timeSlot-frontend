import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome'; 

import './timeSlot.css'
import TimeSlotPropType from './timeSlotPropType'

class TimeSlot extends React.Component {
  static propTypes = {
    timeSlot: TimeSlotPropType.isRequired,
  }

  render() {
    const {  } = this.props.timeSlot;

    return (
      <div>
        Info on a slot
      </div>
    );
  }
}

export default(TimeSlot);
