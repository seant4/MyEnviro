import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import Progress from './components/progress/progress';
import Save from './components/save/save';
import Learn from './components/learn/learn';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar, Brand, Link} from 'react-bootstrap';
import allReducers from './reducers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './store';
import * as serviceWorker from './serviceWorker';

const routing = (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <Router>
      <div>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">My Impact</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="/">Progress</Nav.Link>
            <Nav.Link href="/save">Save</Nav.Link>
            <Nav.Link href="/learn">Learn</Nav.Link>
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
serviceWorker.unregister();
