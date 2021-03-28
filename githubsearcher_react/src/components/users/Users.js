import React from 'react';
import UserItem from './UserItem';
import PropTypes from 'prop-types';
import Spinner from '../layouts/spinner';

const Users = ({ users, loading }) => {
  if (loading === true) {
    return <Spinner />;
  } else {
    return (
      <div style={UserStyle}>
        {users.map((user) => (
          <UserItem key={user.id} user={user}></UserItem>
        ))}
      </div>
    );
  }
};

/////styling
const UserStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem',
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Users;
