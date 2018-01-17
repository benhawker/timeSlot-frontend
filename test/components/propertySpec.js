import React from 'React';
import chai, { expect } from 'chai';
import spies from 'chai-spies';
import { shallow, mount } from 'enzyme';

import Property from '../../src/components/properties/property'

// Sets up chai to enable spies
chai.use(spies);

describe('Property', () => {
  const property = {
    id: '1',
    title: 'Property 1',
    created_at: '2017-01-01 00:00:00 UTC',
    resourceLink: 'resourceLink/123',
    previewLink: 'previewLink/123',
  };

  it('should render the attributes (title, id etc.)', () => {
    const component = shallow(
      <Property property={ property } />
    );

    expect(component.find('.id').text()).to.equal(`ID: ${property.id}`)
    expect(component.find('.title').text()).to.equal(`Title: ${property.title}`)
    expect(component.find('.previewLink').text()).to.equal('Preview')
  });

  it('should have an ackowledged button which marks it as ackowledged', () => {
    const acknowledgeProperty = chai.spy();

    const component = shallow(
      <Property 
        property={ property } 
        acknowledgeproperty={ acknowledgeProperty } 
      />
    );

    expect(component.find('button.acknowledgeButton')).to.have.length(1);

    component.find('button.acknowledgeButton').simulate('click');
    expect(acknowledgeProperty).to.have.been.called;
  });
});