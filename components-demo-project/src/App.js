import React from 'react';
import './App.css';

import { connect } from 'react-redux';
import { Provider } from 'react-redux'
import { Route, Switch, useRouteMatch } from 'react-router-dom' // react-router v4/v5
import { ConnectedRouter } from 'connected-react-router'
import TopicsListComponent from '@studyhub.co/react-comments-django-client/lib/TopicsListComponent'
// import logo from './logo.svg';
import './App.css';

// import { history } from './configureStore'
// this is local store for demo project
import configureStore, { history, basename } from './configureStore'
const store = configureStore()

const _DiscussionIndex = () => {
  return (
      <TopicsListComponent
        anonAsUserObject={Boolean(true)}
        history={history}
      />
  )
}

// const DiscussionIndex = connect(
//   (state) => {
//     return state;
//   }
// )(_DiscussionIndex);

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path={'/discussion'} component={_DiscussionIndex} />
          {/*<Route*/}
          {/*  path={'/'}*/}
          {/*  render={({ match }) => {*/}
          {/*    return <DiscussionIndex/>*/}
          {/*}} />*/}
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;


// <div className="App">
//       <header className="App-header">
//
//         {/*<img src={logo} className="App-logo" alt="logo" />*/}
//         {/*<p>*/}
//         {/*  Edit <code>src/App.js</code> and save to reload.*/}
//         {/*</p>*/}
//         {/*<a*/}
//         {/*  className="App-link"*/}
//         {/*  href="https://reactjs.org"*/}
//         {/*  target="_blank"*/}
//         {/*  rel="noopener noreferrer"*/}
//         {/*>*/}
//         {/*  Learn React*/}
//         {/*</a>*/}
//       </header>
//     </div>
