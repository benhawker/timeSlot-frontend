import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as TimeSlotActions from '../../actions/timeSlotActions'
import TimeSlotPropType from './timeSlotPropType'
import TimeSlots from './timeSlots'

import './index.css'

class TimeSlotsContainer extends Component {
  static propTypes = {
    timeSlots: PropTypes.shape(TimeSlotPropType),
    timeSlotActions: PropTypes.shape({
      loadTimeSlots: PropTypes.func.isRequired,
    }).isRequired,
  }

  componentDidMount() {
    this.props.timeSlotActions.loadTimeSlots(null);
  }

  render() {
    const { timeSlots, timeSlotActions } = this.props;

    return(
      <div className='container-fluid'>
        <div id='time-slots-container'>
          <TimeSlots
            key={ '1' }
            timeSlotActions={ timeSlotActions }
            timeSlots={ timeSlots }
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
 return {
    timeSlots: state.selectedProperty.timeSlots,
    selectedProperty: state.selectedProperty.property,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    timeSlotActions: bindActionCreators(TimeSlotActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimeSlotsContainer);

