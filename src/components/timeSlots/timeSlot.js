import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome'; 

import './timeSlot.css'
import TimeSlotPropType from './timeSlotPropType'

class TimeSlot extends React.Component {
  static propTypes = {
    timeSlot: TimeSlotPropType.isRequired,
    active: PropTypes.bool.isRequired,
    onSlotActive: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.setActive = this.setActive.bind(this);
  }

  setActive(bool) {
    this.props.onSlotActive(this.props.timeSlot);
  }

  render() {  
    const { key, id, title, timeOfSlot, createdAt } = this.props.timeSlot;

    return (
      <div className={ this.props.active ? "timeSlot active" : "timeSlot"} onClick={this.setActive.bind(this) }>
        <div className="innerTimeSlot">
          <a className='datetime'>{ timeOfSlot }</a>
        </div>
      </div>
    );
  }
}

export default(TimeSlot);
