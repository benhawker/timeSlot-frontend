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

class NewInquiryContainer extends Component {
  static propTypes = {
    timeSlots: PropTypes.shape(TimeSlotPropType),
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
  }

  handleCustomerNameChange(e) {
    this.setState({ customerName: e.target.value });
  }

  componentDidMount() {
    this.props.timeSlotActions.loadTimeSlots(this.props.location.state.propertyId);
  }

  handleFormSubmit(e) {
    e.preventDefault();

    const inquiryId = UUID.v4();

    const formPayload = {
      user: "ADD_CONCEPT_OF_USER",
      clientName: this.props.selectedClient,
    };

    // Sends the payload in a PUT request.
    this.props.inquiryActions.createInquiry(inquiryId, formPayload)

    // Redirect to root page.
    this.props.history.push("/");
  }


  render() {
    const { timeSlots, timeSlotActions } = this.props;


    return (
      <div>
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