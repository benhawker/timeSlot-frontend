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
    const { id, title, timeOfSlot, createdAt } = this.props.timeSlot;

    return (
      <div>
        <div className="timeSlot">
          <div className="innerTimeSlot">
            <a className='datetime'>{ timeOfSlot }</a>
          </div>
        </div>
      </div>
    );
  }
}

export default(TimeSlot);
