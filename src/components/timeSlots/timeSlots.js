import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './timeSlots.css'

import TimeSlot from './timeSlot'
import TimeSlotPropType from './timeSlotPropType'

class TimeSlots extends Component {
  static propTypes = {
    timeSlots: PropTypes.shape(TimeSlotPropType).isRequired,
    selectedProperty: PropTypes.object.isRequired,
    timeSlotActions: PropTypes.shape({
      loadTimeSlots: PropTypes.func.isRequired,
    }),
  }

  static defaultProps = {
    timeSlots: {},
    timeSlotActions: {},
  }

  showingXSlots() {
    const timeSlotsLength = this.props.timeSlots.length;

    if ((timeSlotsLength) <= this.props.counter) {
      return (`Time Slots (Showing ${timeSlotsLength} of ${timeSlotsLength})`);
    }
  }

  render() {
    const { timeSlots, selectedProperty } = this.props;

    const noSlotsMessage = (
      <p>
        Sorry but there are no available slots for this property. 
      </p>
    );

    return (
      <div id='timeSlots'>
        <div className="time-slots">
          <h6 className="showingXSlots">
            { 
              this.showingXSlots()
            }
          </h6>

          <ul className='clearfix'> 
            {
              timeSlots && Object.keys(timeSlots).map(function(timeSlot, index) {
                return <TimeSlot 
                        key={ index }
                        timeSlot={ timeSlots[timeSlot] }
                      />
              })
            }

            {/* Render no slots message if there are no slots. */}
            { Object.keys(timeSlots).length === 0 ? noSlotsMessage : null}
          </ul>
      
        </div>
      </div>
    );
  }
}

export default(TimeSlots);

