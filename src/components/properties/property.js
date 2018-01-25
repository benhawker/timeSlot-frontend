import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import FontAwesome from 'react-fontawesome'; 

import './property.css'
import PropertyPropType from './propertyPropType'

class Property extends React.Component {
  static propTypes = {
    property: PropertyPropType.isRequired,
  }

  constructor(props, context) {
    super(props, context);
    this.previewLink = this.previewLink.bind(this);
  }

  previewLink() {
    const { previewLink } = this.props.property;
    return (`api/${previewLink}`);
  }

  
  render() {
    const { id, title, createdAt, description } = this.props.property;

    return (
      <li className="property">
        <div className="innerProperty">
          <p className='title'>{ title }</p>

          <Link to={{
            pathname: 'time_slots',
            state: { propertyId: id }
          }}>
            Time Slots
          </Link>

           <Link to={{
            pathname: 'inquiries',
            state: { propertyId: id }
          }}>
            New Inquiry
          </Link>

          <div className="meta">
            <span className='datetime'>{ createdAt }</span>
            <br />
            <div className='description'>{ description }</div>
          </div>

          <div className='links'>
            <a href={ this.previewLink() } className="previewLink">
              <FontAwesome 
                name='download'
                size='lg'
                style={{ color: 'white', lineHeight: 1.2 }}
              />
            </a>
          </div>
        </div>
      </li>
    );
  }
}

export default(Property);
