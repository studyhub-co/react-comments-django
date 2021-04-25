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

import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { IntlProvider } from 'react-intl'

// import TopicsList from './containers/Topics'

// Import Language Provider
// import LanguageProvider from 'containers/LanguageProvider'

import { TOPIC_URL_MASK } from './containers/App/urls'
import ThreadsList from './containers/Threads/Loadable'
import ThreadPage from './containers/Thread/Loadable'
import NewTopicPage from './containers/NewTopicPage/Loadable'
import NewThreadPage from './containers/NewThreadPage/Loadable'
// import NotFoundPage from './containers/NotFoundPage/Loadable'
import HomePage from './containers/HomePage/Loadable'

import * as enTranslationMessages from './translations/en.json'
import TopicsList from './containers/Topics/Loadable'
// import LanguageProvider from './containers/LanguageProvider'

// Create redux store with history
import configureStore from './configureStore'
const initialState = {}
const store = configureStore(initialState)

/** *
 * @param anonUserObject use anonUserObject if true with is_anonymous attr {"is_anonymous":true}
 * @returns {*}
 * @constructor
 */
function TopicsListComponent() {
  const match = useRouteMatch()

  console.log(match.path)

  return (
    <IntlProvider locale="en" messages={enTranslationMessages}>
      <Provider store={store}>
        <Switch>
          <Route exact path={`${match.path}`} component={HomePage} />
          <Route exact path={`${match.path}topics`} component={TopicsList} />
          <Route
            exact
            path={`${match.path}${TOPIC_URL_MASK}`}
            component={ThreadsList}
          />
          <Route
            exact
            path={`${
              match.path
            }:topicSlug([A-Za-z0-9_\\-\\.]+)/:threadId(\\d+)/:threadSlug([A-Za-z0-9_\\-\\.]+)`}
            component={ThreadPage}
          />
          <Route
            exact
            path={`${match.path}new-topic`}
            component={NewTopicPage}
          />
          <Route
            exact
            path={`${
              match.path
            }topics/:topicSlug([A-Za-z0-9_\\-\\.]+)/new-thread`}
            component={NewThreadPage}
          />
          {/* we assume that parent project has his own 404 page */}
          {/* <Route path="" component={NotFoundPage} /> */}
        </Switch>
      </Provider>
    </IntlProvider>
  )
}

TopicsListComponent.propTypes = {
  anonAsUserObject: PropTypes.bool,
}

export default TopicsListComponent
