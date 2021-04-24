import React from 'react'

import { Provider } from 'react-redux'
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom' // react-router v4/v5
import { ConnectedRouter } from 'connected-react-router'

import configureStore, { history } from './configureStore'
import TopicsListComponent from '@studyhub.co/react-comments-django-client/lib/TopicsListComponent'

function MainApp() {
  return (
    <div className="App">
          <header className="App-header">
            <Switch>
              <Route path={'/'} component={MainApp} />
            </Switch>
          </header>
    </div>
  );
}

export default MainApp;



