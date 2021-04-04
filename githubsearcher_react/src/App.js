/* State of a component is an object in the component whose contents may change over the lifetime of the component */

import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/layouts/Navbar';
import Home from './components/pages/home';
import NotFound from './components/pages/NotFound';
import Alert from './components/layouts/alert';

import About from './components/pages/about';
import User from './components/users/User';

// import axios from 'axios';

import GithubState from './context/githubState';

import './App.css';

const App = () => {
  return (
    <GithubState>
      <Router>
        <div className='App'>
          <Navbar title='Locate Github' icon='fab fa-github'></Navbar>

          <div className='container'>
            <br />
            <Alert />

            <Switch>
              <Route
                exact
                path='/'
                // render={(props) => (
                //   <Fragment>
                //     <Search/>
                //     <br />
                //     <Users></Users>
                //   </Fragment>
                // )}
                component={Home}
              ></Route>

              <Route exact path='/about' component={About}></Route>

              <Route exact path='/User/:login' component={User}></Route>

              <Route component={NotFound}></Route>
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
