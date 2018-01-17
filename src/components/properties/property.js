import React from 'react';
import PropTypes from 'prop-types';

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
    const { title, createdAt, description } = this.props.property;

    return (
      <li className="property">
        <p className='title'>{ title }</p>

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
      </li>
    );
  }
}

export default(Property);
