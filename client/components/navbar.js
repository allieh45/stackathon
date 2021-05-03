import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';
import Recipes from './Recipes';

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div className='nav-bar'>
    <h1>Mixologist</h1>
    <nav>
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          <Link to='/home'>Home</Link>
          <a href='#' onClick={handleClick}>
            Logout
          </a>
          <Link to='/recipes' component={Recipes}>
            Recipes
          </Link>
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Sign Up</Link>
          <Link to='/recipes' component={Recipes}>
            Recipes
          </Link>
        </div>
      )}
    </nav>
    <hr />
  </div>
);

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
