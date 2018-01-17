import React from 'react';
import { Route } from 'react-router-dom'

import PropertiesContainer from '../properties/index'
import TimeSlotsContainer from '../timeSlots/index'

const App = () => (
  <div>
    <main>
	  <Route exact path="/" component={ PropertiesContainer } />
      <Route exact path="/properties" component={ PropertiesContainer } />
      <Route exact path="/time_slots" component={ TimeSlotsContainer } />
    </main>
  </div>
)

export default(App)