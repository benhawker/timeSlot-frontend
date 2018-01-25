import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import ReactDOM from 'react-dom';

import * as PropertyActions from '../../actions/propertyActions'
import PropertyPropType from '../properties/propertyPropType'

import './navbar.css'

class Navbar extends Component {
  static propTypes = {
    properties: PropTypes.shape(PropertyPropType),

    propertyActions: PropTypes.shape({
      loadProperties: PropTypes.func.isRequired,
    }).isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      selectedProperty: {},
      properties: [],
    };
  }

  // Load properties on page load.
  componentDidMount() {
    this.props.propertyActions.loadProperties(null);
  }
      
  render() {
    return (
      <div>
        <nav>
          <header>
            <Link to="/">Home</Link>
            <Link to="/properties">Properties</Link>
            <Link to="/inquiries">Inquiries</Link>
          </header>
        </nav>
      </div>
    )
  }
} 

function mapStateToProps(state) {
 return {
    properties: state.properties,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    propertyActions: bindActionCreators(PropertyActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
