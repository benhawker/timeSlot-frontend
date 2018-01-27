import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import UUID from "node-uuid";

import * as TimeSlotActions from '../../actions/timeSlotActions'
import * as InquiryActions from '../../actions/inquiryActions'

import TimeSlotPropType from '../timeSlots/timeSlotPropType'
import TimeSlots from '../timeSlots/timeSlots'
import SingleInput from '../common/singleInput';

import './container.css'

class NewInquiryContainer extends Component {
  static propTypes = {
    timeSlots: PropTypes.shape(TimeSlotPropType),
    selectedTimeSlot: TimeSlotPropType,
    timeSlotActions: PropTypes.shape({
      loadTimeSlots: PropTypes.func.isRequired,
    }).isRequired,
    inquiryActions: PropTypes.shape({
      createInquiry: PropTypes.func.isRequired,
    }).isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      customerName: '',
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleCustomerNameChange = this.handleCustomerNameChange.bind(this);
    this.handleCustomerPhoneChange = this.handleCustomerPhoneChange.bind(this);
    this.handleCustomerEmailChange = this.handleCustomerEmailChange.bind(this);
  }

  handleCustomerNameChange(e) {
    this.setState({ customerName: e.target.value });
  }

  handleCustomerEmailChange(e) {
    this.setState({ customerEmail: e.target.value });
  }

  handleCustomerPhoneChange(e) {
    this.setState({ customerPhone: e.target.value });
  }

  componentDidMount() {
    this.props.timeSlotActions.loadTimeSlots(this.props.location.state.propertyId);
  }

  handleFormSubmit(e) {
    e.preventDefault();

    const inquiryId = UUID.v4();

    const formPayload = {
      customerName: this.state.customerName,
      customerPhone: this.state.customerPhone,
      customerEmail: this.state.customerEmail,
      selectedTimeSlot: this.props.selectedTimeSlot,
    };

    console.log(formPayload);

    // Sends the payload in a PUT request.
    this.props.inquiryActions.createInquiry(inquiryId, formPayload)

    // Redirect to root page.
    this.props.history.push("/");
  }


  render() {
    const { timeSlots, timeSlotActions } = this.props;

    return (
      <div className="newInquiryContainer">
        <form onSubmit={ this.handleFormSubmit }>

        <div id='time-slots-container'>
          <TimeSlots
            key={ '1' }
            timeSlotActions={ timeSlotActions }
            timeSlots={ timeSlots }
          />
        </div>
        
        <SingleInput
          classes={ 'nameInput' }
          inputType={ 'text' }
          title={ 'Name' }
          name={ 'name' }
          content={ this.state.customerName }
          controlFunc={ this.handleCustomerNameChange }
          placeholder={ "Name" }
        />

         <SingleInput
          classes={ 'PhoneInput' }
          inputType={ 'text' }
          title={ 'Phone' }
          name={ 'phone' }
          content={ this.state.customerPhone }
          controlFunc={ this.handleCustomerPhoneChange }
          placeholder={ "Telephone Number" }
        />

         <SingleInput
          classes={ 'emailInput' }
          inputType={ 'text' }
          title={ 'Email' }
          name={ 'email' }
          content={ this.state.customerEmail }
          controlFunc={ this.handleCustomerEmailChange }
          placeholder={ "Email" }
        />

        <input
          type="submit"
          className="btn btn-primary float-right"
          value="Submit"/>
      </form>
      </div>
    );
  }
}


function mapStateToProps(state) {
 return {
    timeSlots: state.timeSlots,
    selectedTimeSlot: state.selectedTimeSlot,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    timeSlotActions: bindActionCreators(TimeSlotActions, dispatch),
    inquiryActions: bindActionCreators(InquiryActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewInquiryContainer);

// export default(InquiryForm);