/* State of a component is an object in the component whose contents may change over the lifetime of the component */

import React, { Fragment, useState } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layouts/alert';

import About from './components/pages/about';
import User from './components/users/User';

import axios from 'axios';
import './App.css';

const App = () => {
  const [users, setUsersState] = useState([]);
  const [user, setUserState] = useState({});
  const [loading, setLoadingState] = useState(false);
  const [alert, setAlertState] = useState(null);
  const [repos, setReposState] = useState([]);

  // async componentDidMount() {
  //   /* in react we cannot directly change value of state variable by using this.state.loading = true,
  //   instead we do... */

  //   //setState
  //   this.setState({ loading: true }); //till data is not fetched

  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );

  //   this.setState({ users: res.data, loading: false });
  // }

  const searchUsers = async (text) => {
    // this.setState({ loading: true });
    setLoadingState(true);

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    // this.setState({ users: res.data.items, loading: false });
    setLoadingState(false);
    setUsersState(res.data.items);
  };

  //get a single github user
  const getUser = async (username) => {
    setLoadingState(true);

    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    setLoadingState(false);
    setUserState(res.data);
  };

  //get a user repos
  const getUserRepos = async (username) => {
    setLoadingState(true);

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=8&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    setLoadingState(false);
    setReposState(res.data);
  };

  const clearUsers = () => {
    setLoadingState(false);
    setUsersState([]);
  };

  const setAlert = (msg, type) => {
    // this.setState({
    //   alert: {
    //     msg: msg,
    //     type: type,
    //   },
    // });
    setAlertState({
      msg: msg,
      type: type,
    });
    setTimeout(() => setAlertState(null), 3000);
  };

  return (
    <Router>
      <div className='App'>
        <Navbar title='Locate Github' icon='fab fa-github'></Navbar>

        <div className='container'>
          <br />
          <Alert alert={alert} />
          {/* putting multiple components in a single route */}

          <Switch>
            <Route
              exact
              path='/'
              render={(props) => (
                <Fragment>
                  <Search
                    searchUsers={searchUsers}
                    clearUsers={clearUsers}
                    showClear={ users.length > 0 ? true : false}
                    setAlert={setAlert}
                  />
                  <br />
                  <Users loading={loading} users={users}></Users>
                </Fragment>
              )}
            ></Route>

            <Route exact path='/about' component={About}></Route>

            <Route
              exact
              path='/User/:login'
              render={(props) => (
                <User
                  {...props} //is method se jo User k props hain vo User component m b pass ho gye to match.params aur history wale props use kr skte humlog ab User.js component m jaake
                  loading={loading}
                  getUser={getUser}
                  user={user}
                  getUserRepos={getUserRepos}
                  repos={repos}
                ></User>
              )}        ></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
