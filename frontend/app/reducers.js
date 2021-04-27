/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import globalReducer from './containers/App/reducer'
import languageProviderReducer from './containers/LanguageProvider/reducer'
import history from './utils/apphistory'

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}, _history) {
  // console.trace(_history)

  const rootReducer = combineReducers({
    global: globalReducer,
    language: languageProviderReducer,
    // router: connectRouter(_history || history),
    router: connectRouter(history),
    ...injectedReducers,
  })

  return rootReducer
}
