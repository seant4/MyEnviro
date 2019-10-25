import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import Progress from './components/progress/progress';
import Save from './components/save/save';
import Learn from './components/learn/learn';
import './bootstrap.min.css';
import {Nav, Navbar} from 'react-bootstrap';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './store';
import * as serviceWorker from './serviceWorker';

const routing = (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <Router>
      <div>
        <Navbar style={{'display':'flex', 'justify-content':'center'}} sticky="top" bg="dark" variant="dark">
          <Navbar.Brand style={{'font-size': '27px'}}>My Impact</Navbar.Brand>
            <Nav  className="mr-auto">
            <Nav.Link href="/" style={{'font-size': '25px'}}>Progress</Nav.Link>
            <Nav.Link href="/save" style={{'font-size': '25px'}}>Save</Nav.Link>
            <Nav.Link href="/learn" style={{'font-size': '25px'}}>Learn</Nav.Link>
            <Nav.Link href="/learn" style={{'font-size': '25px'}}></Nav.Link>
            </Nav>
        </Navbar>
        <Route exact path="/" component={Progress} />
        <Route path="/save" component={Save} />
        <Route path="/learn" component={Learn} />
      </div>
    </Router>
    </PersistGate>
    </Provider>
  )
  
  ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
