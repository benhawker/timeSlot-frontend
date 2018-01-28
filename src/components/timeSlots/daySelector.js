import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './daySelector.css'

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
    let dateObj = new Date();
    dateObj.setDate(dateObj.getDate() + dateIdx);
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1;
    const day = dateObj.getDate();
    const pad = function(val) { var str = val.toString(); return (str.length < 2) ? "0" + str : str};
    return([year, pad(month), pad(day)].join("-"));
  }

  numberOfSlots(dateIdx) {
    return `x slots available`;
  }

  setActive(bool) {
    this.props.onDayActive(this.props.dayIndex);
  }

  render() {
    return (
      <div className={ this.props.active ? "daySelector active" : "daySelector"} onClick={this.setActive.bind(this) }>
        <div className="innerDaySelector">
          { this.props.dayIndex }
          
          <small>({ this.numberOfSlots(this.props.dayIndex) })</small>
        </div>
      </div>
    );
  }
}

export default(DaySelector);

