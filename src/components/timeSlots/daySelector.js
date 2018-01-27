import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import './daySelector.css'

// import TimeSlot from './timeSlot'
// import TimeSlotPropType from './timeSlotPropType'

class DaySelector extends Component {
  static propTypes = {
    dayIndex: PropTypes.number.isRequired,
    active: PropTypes.bool.isRequired,
    onDayActive: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.setActive = this.setActive.bind(this);
  }

  dateFormatter(dateIdx) {
    const dateObj = new Date()
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1;
    const day = dateObj.getDate();
    const pad = function(val) { var str = val.toString(); return (str.length < 2) ? "0" + str : str};
    return([year, pad(month), pad(day)].join("-"));
  }

  setActive(bool) {
    this.props.onDayActive(this.props.dayIndex);
  }

  render() {
    return (
      <div className={ this.props.active ? "daySelector active" : "daySelector"} onClick={this.setActive.bind(this) }>
          <ul className='clearfix'> 
            {
              this.dateFormatter(1)
            }
          </ul>
    
      </div>
    );
  }
}

export default(DaySelector);

