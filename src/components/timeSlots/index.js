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
      setSelectedTimeSlot: PropTypes.func.isRequired,
    }).isRequired,
  }

  componentDidMount() {
    if (this.props.location.state == null) {
      this.props.history.push("/");
    } else {
      this.props.timeSlotActions.loadTimeSlots(this.props.location.state.propertyId);
    }
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
    timeSlots: state.timeSlots,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    timeSlotActions: bindActionCreators(TimeSlotActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimeSlotsContainer);

