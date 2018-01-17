import _ from 'lodash';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

function actionMessageCount(store, action) {
  const counter = _.filter(store.getActions(), (o) =>
     o.type === action
  );

  return counter.length;
}


function configMockStore() {
  return configureMockStore([promiseMiddleware(), thunk]);
}

// expects action to be a promise
// always pass done to the "it" statement
// otherwise the test will pass no matter what with asyncBlock
function asyncBlock(action, done, callback) {
  if (done === undefined) {
    throw "Getting done from wrong context, get it from the 'it' statement"; // eslint-disable-line no-throw-literal
  }

  action.then(() => {
    callback();
    done();
  }).catch((err) => {
    callback();
    done();
  });
}


export {
  actionMessageCount,
  configMockStore,
  asyncBlock,
};