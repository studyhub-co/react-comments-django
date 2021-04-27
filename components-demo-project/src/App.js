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
import configureStore, { history } from './configureStore'
const store = configureStore()

const _DiscussionIndex = props => {
  // const match = useRouteMatch()
  // console.log(match.path)

  const { router } = props;

  // console.log(router);

  return (
      <TopicsListComponent
        anonAsUserObject={Boolean(true)}
        history={history}
        // on={props.history}
      />
  )
}

const DiscussionIndex = connect(
  (state) => {
    return state;
  }
)(_DiscussionIndex);

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          {/*<Route path={'/'} component={DiscussionIndex} />*/}
          <Route
            path={'/'}
            render={({ match }) => {
              return <DiscussionIndex history={history} />
          }} />
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
