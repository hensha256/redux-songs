import React from 'react'
import ReactDOM from 'react-dom'
// This allows the redux store to be provided to the app
import { Provider } from 'react-redux'
// This allows us to actually create the store
import { createStore } from 'redux'

import App from './components/App'
import reducers from './reducers'

ReactDOM.render(
  // we wrap our App in a provider, and give this provider the redux store
  // this way the app can now access all of the reducers and therefore the data
  <Provider store={createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <App/>
  </Provider>,
  document.querySelector('#root')
)