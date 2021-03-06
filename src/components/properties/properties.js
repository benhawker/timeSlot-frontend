import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './properties.css'

import Property from './property'
import PropertyPropType from './propertyPropType'

class Properties extends Component {
  static propTypes = {
    properties: PropTypes.shape(PropertyPropType).isRequired,
    propertyActions: PropTypes.shape({
      loadProperties: PropTypes.func.isRequired,
    }),
  }

  static defaultProps = {
    properties: {},
    propertyActions: {},
  }

 
  render() {
    const { properties } = this.props;

    const noPropertiesMessage = (
      <p>
        No properties to show.
      </p>
    );

    return (
      <div id='properties'>
        <ul> 
          {
            properties && Object.keys(properties).map(function(property, index) {
              return <Property 
                      key={ index }
                      property={ properties[property] }
                    />
            })
          }

          {/* Render no properties message if there are no properties. */}
          { Object.keys(properties).length === 0 ? noPropertiesMessage : null}
        </ul>
      </div>
    );
  }
}

export default(Properties);

