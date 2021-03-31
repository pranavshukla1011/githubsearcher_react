import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// class UserItem extends Component {
//   // state = {
//   //   id: 'id',
//   //   login: 'mojumbo',
//   //   avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
//   //   html_url: 'https://github.com/mojombo',
//   // };

// static propTypes = {
//   user: PropTypes.object.isRequired,
// };
//   render() {
//     // destructuring

// const { login, avatar_url, html_url } = this.props.user;

// return (
//   <div className='card text-center'>
//     <img
//       src={avatar_url}
//       className='round-img'
//       style={{ width: '60px' }}
//       alt=''
//     />
//     <h3>{login}</h3>
//     <div className=''>
//       <a
//         href={html_url}
//         className='btn btn-dark btn-sm my-1'
//         target='_blank'
//         rel='noreferrer'
//       >
//         More
//       </a>
//     </div>
//   </div>
// );
//   }
// }

//using stateless functional components
const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  // const { login, avatar_url, html_url } = props.user;

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
  user: PropTypes.object.isRequired,
};
export default UserItem;
