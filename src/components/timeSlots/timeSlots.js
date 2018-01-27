import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './timeSlots.css'

import TimeSlot from './timeSlot'
import TimeSlotPropType from './timeSlotPropType'
import DaySelector from './daySelector'

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
    this.state = {activeSlot: null, activeDay: null};
    // this.setAsSelected = this.setAsSelected.bind(this);
    this.onSlotActive = this.onSlotActive.bind(this);
    this.onDayActive = this.onDayActive.bind(this);
  }

  onSlotActive(timeSlot) {
    // TODO: Decide which state to use.
    this.setState({activeSlot: timeSlot});
    this.props.timeSlotActions.setSelectedTimeSlot(timeSlot);
  }

  onDayActive(day) {
    this.setState({activeDay: day});
    // this.props.timeSlotActions.setSelectedDay(day);
    console.log("Day now active");
    console.log(this.state.activeDay);
  }

  showingXSlots() {
    const timeSlotsLength = this.props.timeSlots.length;

    if ((timeSlotsLength) <= this.props.counter) {
      return (`Time Slots (Showing ${timeSlotsLength} of ${timeSlotsLength})`);
    }
  }

  render() {
    const { timeSlots } = this.props;

    const noSlotsMessage = (
      <p>
        Sorry but there are no available slots for this property. 
      </p>
    );

    const days = [0,1,2,3,4,5,6];

    let self = this;

    return (
      <div id='timeSlots'>
        
        <h6 className="showingXDays">
          Showing the next 7 days.
        </h6>
        {
          days.map(function(dayIndex, index) {
            return(<DaySelector
                      onDayActive={ self.onDayActive.bind(self) } 
                      active={ days[index] === self.state.activeDay }
                      dayIndex={ dayIndex }
                      key={ index }
                  />)
          })
        }

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

