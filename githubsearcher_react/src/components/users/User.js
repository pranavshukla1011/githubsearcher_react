import React, { Fragment, useEffect, useContext} from 'react';
import Spinner from '../layouts/spinner';
import Repos from './repos/Repos';
import { Link } from 'react-router-dom';
import GithubContext from '../../context/githubContext';

const User = ({ match }) => {

  const githubContext = useContext(GithubContext);

  useEffect(() => {
    githubContext.getUser(match.params.login);
    githubContext.getUserRepos(match.params.login);
    //eslint-disable-next-line
  }, []);

  // componentDidMount() {
  //   console.log(this.props);
  // this.props.getUser(this.props.match.params.login);
  // this.props.getUserRepos(this.props.match.params.login);
  // }

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = githubContext.user;

  if (githubContext.loading) return <Spinner />;

  return (
    <Fragment>
      <Link to='/' className='btn btn-light'>
        Back to Search
      </Link>
      Hireable: {``}
      {hireable ? (
        <i className='fas fa-check text-success' />
      ) : (
        <i className='fas fa-times-circle text-danger' />
      )}
      <div className='card grid-2'>
        <div className='all-center'>
          <img
            src={avatar_url}
            alt=''
            className='round-img'
            style={{ width: '120px' }}
          />
          <h1>{name}</h1>
          <p>Location: {location} </p>
        </div>

        <div className='all-center'>
          {bio && (
            <Fragment>
              <h3>User Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}

          <a
            href={html_url}
            target='_blank'
            className='btn btn-dark my-1'
            rel='noreferrer'
          >
            {' '}
            Visit Github Profile
          </a>

          <ul>
            {login && (
              <li>
                <strong>Username : </strong> {login}
              </li>
            )}
            {company && (
              <li>
                <strong>Company : </strong> {company}
              </li>
            )}
            {blog && (
              <li>
                <strong>Website : </strong> {blog}
              </li>
            )}
          </ul>
        </div> 
      </div>
      <div className='card text-center'>
        <div className='badge badge-primary'>Followers : {followers}</div>
        <div className='badge badge-success'>Following : {following}</div>
        <div className='badge badge-light'>Public Repos : {public_repos}</div>
        <div className='badge badge-dark'>Public Gists : {public_gists}</div>
      </div>
      <Repos />
    </Fragment>
  );
};

export default User;
