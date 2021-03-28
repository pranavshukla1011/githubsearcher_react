/* State of a component is an object in the component whose contents may change over the lifetime of the component */

import React, { Component } from 'react';
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  async componentDidMount() {
    /* in react we cannot directly change value of state variable by using this.state.loading = true,
    instead we do... */

    //setState
    this.setState({ loading: true }); //till data is not fetched

    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ users: res.data, loading: false });
  }

  searchUsers = async (text) => {
    
    const res = await axios.get(
      `https://api.github.com/search/users?q=client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ users: res.data.items, loading: false });
  };

  render() {
    const { loading, users } = this.state;
    return (
      <div className='App'>
        <Navbar title='Locate Github' icon='fab fa-github'></Navbar>

        <div className='container'>
          <br />
          <Search searchUsers={this.searchUsers} />
          <br />
          <Users loading={loading} users={users}></Users>
        </div>
      </div>
    );
  }
}

export default App;
