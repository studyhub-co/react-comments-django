/**
 * This is the entry file for the threads list component,
 */

// Needed for redux-saga es6 generator support
// import '@babel/polyfill'

// Import all the third party stuff
import React from 'react'
// import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
// import { ConnectedRouter } from 'connected-react-router'
// import FontFaceObserver from 'fontfaceobserver'
// import history from 'utils/history'
import 'sanitize.css/sanitize.css'

import TopicsList from './containers/Topics'

// Import Language Provider
// import LanguageProvider from 'containers/LanguageProvider'

import configureStore from './configureStore'

// Create redux store with history
const initialState = {}
const store = configureStore(initialState)

/** *
 * @param anonUserObject use anonUserObject if true with is_anonymous attr {"is_anonymous":true}
 * @returns {*}
 * @constructor
 */
export function TopicsListComponent() {
  return (
    <Provider store={store}>
      <TopicsList />
    </Provider>
  )
}

TopicsListComponent.propTypes = {
  anonAsUserObject: PropTypes.bool,
}
