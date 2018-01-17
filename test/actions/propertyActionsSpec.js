import chai, { expect } from 'chai';

import { actionMessageCount, configMockStore, asyncBlock } from '../helpers/testHelper';

import configuredNock from '../helpers/nock';
import * as actions from '../../src/actions/propertyActions';
import * as types from '../../src/actions/actionTypes';

const mockStore = configMockStore();

// Helper to create some properties
function createProperties(count) {
  const arr = new Array(); 
  for (let i = 0; i < count; i += 1) {
    arr[i] = i;
  }

  return arr.map((x) => ({ id: x, title: 'Test Property' }));
}

describe('loadProperties', () => {
  
  it('should load properties from the api', (done) => {
    const store = mockStore({
      session: {
        token: 'abc123',
      },
    });

    configuredNock().run((testNock) => {
      testNock.get('/api/v1/properties').reply(200, { foo: 'bar' });
    });

    asyncBlock(store.dispatch(actions.loadProperties()), done, () => {
      expect(actionMessageCount(store, types.LOAD_PROPERTIES)).to.equal(1);

      const passedData = store
        .getActions()
        .filter((action) => action.type === types.LOAD_PROPERTIES)[0]
        .payload;
      expect(passedData.data).to.deep.equal({ foo: 'bar' });
    });
  });

  describe('acknowledgeProperty', () => {
    it('can acknowedlge the property', (done) => {
      const store = mockStore({
        session: {
          token: 'abc123',
        },
        property: {
          property: [],
        },
      });

      const property = {
        data: {
          type: 'property',
          id: '1',
          attributes: {
            consumed: true,
          },
        },
      };

      configuredNock().run((testNock) => {
        testNock.put(
          '/api/v1/property/1',
          {
            type: 'property',
            id: '1',
            attributes: {
              consumed: true,
            },
          }
        ).reply(200, property);
      });

      asyncBlock(
        store.dispatch(actions.acknowledgeProperty('1')),
        done,
        () => {
          expect(actionMessageCount(store, types.ACKNOWKLEDGE_PROPERTY)).to.equal(1);

          const passedData = store
            .getActions()
            .filter((action) => action.type === types.ACKNOWKLEDGE_NOTIFICATION)[0]
            .payload;

          expect(passedData.data.data).to.deep.equal({
            type: 'property', id: '1', attributes: { acknowledge: true },
          });
        }
      );
    });
  });

});