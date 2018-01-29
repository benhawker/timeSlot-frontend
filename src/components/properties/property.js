import React from 'react';
import { Link } from 'react-router-dom'

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

  
  render() {
    const { id, title, createdAt, description } = this.props.property;

    return (
      <li className="property">
        <div className="innerProperty">
          <p className='title'>{ title }</p>
          <p className='description'>{ description }</p>

           <Link to={{
            pathname: 'inquiries',
            state: { propertyId: id }
          }}>
            Book a Viewing
          </Link>

          <div className="meta">
            <span className='datetime'>{ createdAt }</span>
          </div>

        </div>
      </li>
    );
  }
}

export default(Property);
