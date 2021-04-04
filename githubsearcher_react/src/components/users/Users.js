import React,{useContext} from 'react';
import UserItem from './UserItem';
import Spinner from '../layouts/spinner';
import GithubContext from '../../context/githubContext';

const Users = () => {
  const githubContext  = useContext(GithubContext)

  if (githubContext.loading === true) {
    return <Spinner />;
  } else {
    return (
      <div style={UserStyle}>
        {githubContext.users.map((user) => (
          <UserItem key={user.id} user = {user}></UserItem>
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

export default Users;
