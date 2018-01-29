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
    this.state = {selectedSlot: null, selectedDay: null};
    // this.setAsSelected = this.setAsSelected.bind(this);
    this.onSlotActive = this.onSlotActive.bind(this);
    this.onDayActive = this.onDayActive.bind(this);
  }

  onSlotActive(timeSlot) {
    // TODO: Decide which state to use.
    this.setState({selectedSlot: timeSlot});
    this.props.timeSlotActions.setSelectedTimeSlot(timeSlot);
  }

  onDayActive(day) {
    this.setState({selectedDay: day});
    this.props.timeSlotActions.setSelectedDay(day);
  }


  numberOfAvailableSlots(day) {
    return Object.keys(this.props.timeSlots).filter(ts => this.props.timeSlots[ts].timeOfSlot.includes(day)).length;
  }

  showingXSlots() {
    const timeSlotsLength = this.props.timeSlots.length;

    if ((timeSlotsLength) <= this.props.counter) {
      return (`Time Slots (Showing ${timeSlotsLength} of ${timeSlotsLength})`);
    }
  }

  dateFormatter(dateIdx) {
    let dateObj = new Date();
    dateObj.setDate(dateObj.getDate() + dateIdx);
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1;
    const day = dateObj.getDate();
    const pad = function(val) { var str = val.toString(); return (str.length < 2) ? "0" + str : str};
    return([year, pad(month), pad(day)].join("-"));
  }

  render() {
    const { timeSlots } = this.props;

    const noSlotsMessage = (
      <p>
        Sorry but there are no available slots for this property. 
      </p>
    );

    let filteredTimeSlots = Object.keys(timeSlots).filter(ts => timeSlots[ts].timeOfSlot.includes(this.state.selectedDay));
    const days = [1,2,3,4,5,6,7,8,9,10];
    let dates = days.map(day => this.dateFormatter(day));
    let self = this;

    return (
      <div>
        <div className="daySelectorWrapper">
          <h6 className="showingXDays">
            { `Showing the next ${days.length} days. There are ${Object.keys(timeSlots).length} slots available.`}
          </h6>

          {
            dates.map(function(dayIndex, index) {
              return(<DaySelector
                        onDayActive={ self.onDayActive.bind(self) }
                        active={ dates[index] === self.state.selectedDay }
                        dayIndex={ dayIndex }
                        key={ index }
                        numberOfSlots={ self.numberOfAvailableSlots(dayIndex) }
                    />)
            })
          }
        </div>

        <div className="timeSlots">
          <h6 className="showingXSlots">
            { 
              this.showingXSlots()
            }
          </h6>

          <ul className='clearfix'> 
            {
              filteredTimeSlots.map(function(timeSlot, index) {
                return (<TimeSlot
                          onSlotActive={ self.onSlotActive.bind(self) } 
                          active={ timeSlots[timeSlot] === self.state.selectedSlot }
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

