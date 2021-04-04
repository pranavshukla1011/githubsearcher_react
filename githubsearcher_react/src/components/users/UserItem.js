import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const UserItem = ({user}) => {


  const {avatar_url, login} = user;

  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        className='round-img'
        style={{ width: '60px' }}
        alt=''
      />
      <h3>{login}</h3>
      <div className=''>
        <Link
          to={`/user/${login}`}
          className='btn btn-dark btn-sm my-1'
          // target='_blank'
          rel='noreferrer'
        >
          More
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user : PropTypes.object.isRequired,
}
export default UserItem;
