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

  constructor(props) {
    super(props);
    this.state = {activeSlot: null};
    // this.setAsSelected = this.setAsSelected.bind(this);
    this.onSlotActive = this.onSlotActive.bind(this);
  }

  onSlotActive(timeSlot) {
    this.setState({activeSlot: timeSlot});
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

    let self = this;

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
                return (<TimeSlot
                          onSlotActive={ self.onSlotActive.bind(self) } 
                          active={ timeSlots[timeSlot] === self.state.activeSlot }
                          key={ index }
                          timeSlot={ timeSlots[timeSlot] }
                      />)
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

