import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

// class Navbar extends Component {
  // static protypes = {
  //   title: PropTypes.string.isRequired,
  //   icon: PropTypes.string.isRequired,
  // };

  // render() {
  //   return (
  //     <div className=''>
  //       <nav className='navbar bg-primary'>
  //         <h1>
  //           <i className={this.props.icon}></i> {this.props.title}
  //         </h1>
  //       </nav>
  //     </div>
  //   );
  // }
// }




//using stateless functional components
const Navbar = (props) => {
  
  const {icon, title} = props
  return (
    <div className=''>
      <nav className='navbar bg-primary'>
        <h1>
          <i className={icon}></i> {title}
        </h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
