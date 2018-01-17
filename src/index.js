import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'

import FontAwesome from 'react-fontawesome';

import { loadProperties } from './actions/propertyActions';

import App from './components/app'
import Navbar from './components/navbar/index'
import FlashNotification from './components/flashNotification/index'

import 'sanitize.css/sanitize.css'
import './index.css'

const target = document.querySelector('#root')

// Load the clients for the authenticated user.
store.dispatch(loadProperties(null));

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <FlashNotification />
        <Navbar />
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
)



