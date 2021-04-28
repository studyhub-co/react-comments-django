import React from 'react';
import './App.css';

import { Provider } from 'react-redux'
import { Route, Switch, useRouteMatch } from 'react-router-dom' // react-router v4/v5
import { ConnectedRouter } from 'connected-react-router'
import TopicsListComponent from '@studyhub.co/react-comments-django-client/lib/TopicsListComponent'
import ThreadComponent from '@studyhub.co/react-comments-django-client/lib/ThreadComponent'
import './App.css';

// import { history } from './configureStore'
// this is local store for demo project
import configureStore, { history, basename } from './configureStore'
const store = configureStore()

const DiscussionIndex = () => {
  return (
      <TopicsListComponent
        anonAsUserObject={Boolean(true)}
        history={history}
      />
  )
}

const ThreadIndex = () => {
  return (
          <ThreadComponent
            anonAsUserObject={Boolean(true)}
            threadId={1}
          />
        )
}

const MainPage = () => {
  return (
    <div style={{'margin': '2%'}}>
        <button onClick={()=>{history.push('/discussion/')}}>
          Topics List Component
        </button>
        <span style={{ margin: '1%' }}/>
        <button onClick={()=>{history.push('/thread/')}}>
          Thread Component
        </button>
    </div>
  )
}

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <MainPage />
        <Switch>
          <Route path={'/discussion'} component={DiscussionIndex} />
          <Route path={'/thread'} component={ThreadIndex} />
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
