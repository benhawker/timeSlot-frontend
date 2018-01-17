# Time Slot Booker - Frontend

This was created initially using the https://github.com/facebookincubator/create-react-app project.

You may need to run the following:
* `brew install yarn`
* `yarn add redux react-redux react-router-dom react-router-redux@next redux-thunk`

We are currently serving this on port 4000.
* Install dependencies: `npm install`
* Start the server: `npm start`
* Run the specs - `npm test`

Using this as an external lib for the notifications. Could easily be removed as this is a very lightweight lib.
https://github.com/igorprado/react-notification-system

Some recommended reading:
Why you should use Objects vs Arrays?
https://stackoverflow.com/questions/38445006/redux-state-as-array-of-objects-vs-object-keyed-by-id

Different syntax options in reducers....
https://stackoverflow.com/questions/36031590/right-way-to-update-state-in-redux-reducers

How to update the value of a nested object in a reducer?
https://stackoverflow.com/questions/40096036/how-to-update-a-value-of-a-nested-object-in-a-reducer

Remove data from array or an object.
https://stackoverflow.com/questions/35342355/remove-data-from-nested-objects-without-mutating

Many people seem to be moving towards this:
https://github.com/paularmstrong/normalizr

Forms in react:
https://github.com/lorenseanstewart/react-controlled-form-components/blob/master/src/containers/FormContainer.js

When is it ok to use React set.state:
https://goshakkk.name/should-i-put-form-state-into-redux/

Using the selector pattern:
https://gist.github.com/abhiaiyer91/aaf6e325cf7fc5fd5ebc70192a1fa170
