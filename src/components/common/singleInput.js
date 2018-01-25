import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SingleInput extends Component {
  static propTypes = {
    inputType: PropTypes.oneOf(['text', 'number']).isRequired,
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    controlFunc: PropTypes.func.isRequired,
    content: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    placeholder: PropTypes.string,
  };


  render() {
    const { title,
            classes,
            name,
            inputType,
            content,
            controlFunc,
            placeholder 
          } = this.props;
    
    return (
      <div className="form-group">
        <label className="form-label">{ title }</label>
        <input
          className={ classes }
          name={ name }
          type={ inputType }
          value={ content }
          onChange={ controlFunc }
          placeholder={ placeholder } />
      </div>
    );
  }
}

export default(SingleInput);