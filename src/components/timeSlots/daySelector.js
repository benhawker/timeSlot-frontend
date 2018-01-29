import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './daySelector.css'

class DaySelector extends Component {
  static propTypes = {
    dayIndex: PropTypes.number.isRequired,
    active: PropTypes.bool.isRequired,
    onDayActive: PropTypes.func.isRequired,
    numberOfSlots: PropTypes.number.isRequired,
  }

  constructor(props) {
    super(props);
    this.setActive = this.setActive.bind(this);
  }

  numberOfSlots() {
    if (this.props.numberOfSlots == 1) {
      return `${this.props.numberOfSlots} slot available`;
    } else {
      return `${this.props.numberOfSlots} slots available`;
    }
  }

  setActive(bool) {
    this.props.onDayActive(this.props.dayIndex);
  }

  render() {
    return (
      <div className={ this.props.active ? "daySelector active" : "daySelector"} onClick={this.setActive.bind(this) }>
        <div className="innerDaySelector">
          { this.props.dayIndex }
          <small>({ this.numberOfSlots() })</small>
        </div>
      </div>
    );
  }
}

export default(DaySelector);

