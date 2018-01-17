import React from 'React';
import chai, { expect } from 'chai';
import { mount } from 'enzyme';

import Properties from '../../src/components/properties/properties'

// Helper function to return empty func.
function noOperation() {}

//Sets up two dummy properties.
let properties = { 
  '1': {
        'type': "property",
        'id': "1",
        'title': "Property 1",
        'description': "Property description",
        'createdAt': "2017-01-1 01:01:01 UTC",
        'previewLink': "some/url/preview",
     },
  '2': {
        'type': "property",
        'id': "1",
        'title': "Property 2",
        'description': "Property description",
        'createdAt': "2017-01-1 01:01:01 UTC",
        'previewLink': "some/url/preview",
      },
}


describe('Properties', () => {
  it('should render the no properties message if there are no properties', () => {
    const actions = { loadProperties: noOperation, };
    let component = mount(<Properties properties={ {} } actions={ actions } />);

    expect(component.find('.properties').text()).to.equal('You have no properties :(. Come back and check again later!');
  });

  it('shows how many properties it is rendering', () => {
    const actions = { loadProperties: noOperation, };
    let component = mount(<Properties properties={ properties } actions={ actions } />);

    expect(component.find('.showingXproperties').text()).to.equal('Properties (Showing 2 of 2)');
  });


  it('should render the number of correct properties passed to it', () => {
    const actions = { loadProperties: noOperation, };
    let component = mount(<Properties properties={ properties } actions={ actions } />);

    expect(component.properties).to.have.length(2);
  });
});
