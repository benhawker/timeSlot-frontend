import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as FlashNotificationActions from '../../actions/flashNotificationActions';
import NotificationSystem from 'react-notification-system';

class FlashNotification extends Component {
  constructor(props) {
    super(props);
  }
 
  componentDidMount() {
    this.notificationSystem = this.refs.notificationSystem;
  }
 
  componentWillReceiveProps(newProps) {
    const { message, level } = newProps.flashNotification;
    this.notificationSystem.addNotification({
      message,
      level,
      autoDismiss: 2
    });
  }
 
  render() {
    return (
      <NotificationSystem ref="notificationSystem" />
    );
  }
}
 
function mapStateToProps(state) {
  return {
    flashNotification: state.flashNotification
  }
}
 
function mapDispatchToProps(dispatch) {
  return {
    flashNotificationActions: bindActionCreators(FlashNotificationActions, dispatch)
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(FlashNotification);