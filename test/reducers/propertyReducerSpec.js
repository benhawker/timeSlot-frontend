import { expect } from 'chai';

import reducers, { initialState } from '../../src/reducers/propertiesReducer';
import * as types from '../../src/actions/actionTypes'
import propertiesFixture from '../fixtures/properties.json'

describe('property reducer', () => {
  describe('LOAD_PROPERTIES', () => {
    it("inserts the properties into the state", () => {
      const state = reducers(
        initialState,
        {
          type: types.LOAD_PROPERTIES,
          payload: { data: propertiesFixture },
        }
      );

      expect(state.properties).to.have.length(2);
      expect(state.properties[0]).to.have.all.keys('id', 'title');
    });
  });
});