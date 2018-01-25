import React from 'react';
import { Route } from 'react-router-dom'

import PropertiesContainer from '../properties/index'
import TimeSlotsContainer from '../timeSlots/index'
import NewInquiryContainer from '../inquiries/newInquiryContainer'

const App = () => (
  <div>
    <main>
	  <Route exact path="/" component={ PropertiesContainer } />
      <Route exact path="/properties" component={ PropertiesContainer } />
      <Route exact path="/time_slots" component={ TimeSlotsContainer } />
      <Route exact path="/inquiries" component={ NewInquiryContainer } />
    </main>
  </div>
)

export default(App)