import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as PropertyActions from '../../actions/propertyActions'
import PropertyPropType from './propertyPropType'
import Properties from './properties'

import './index.css'

class PropertiesContainer extends Component {
  static propTypes = {
    properties: PropTypes.shape(PropertyPropType),
    propertyActions: PropTypes.shape({
      loadProperties: PropTypes.func.isRequired,
    }).isRequired,
  }

  render() {
    const { properties, propertyActions } = this.props;

    return(
      <div className='container-fluid'>
        <div id='properties-container'>
          <Properties
            key={ '1' }
            propertyActions={ propertyActions }
            properties={ properties }
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
 return {
    properties: state.properties,
    selectedProperty: state.selectedProperty,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    propertyActions: bindActionCreators(PropertyActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PropertiesContainer);

