/* eslint-disable */
import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Nav = (props) => {
  const { className, closeFunction } = props;
  const style = {
    textDecoration: "none",
  }

  return (
    <nav className={className}>
      <ul>
        <li className="close-btn" onClick={closeFunction}>X</li>
        <Link style={style} onClick={closeFunction} to="/">
          <li>Home</li>
        </Link>
        <Link style={style} onClick={closeFunction} to="/about">
          <li>About</li>
        </Link>
        <Link style={style} onClick={closeFunction} to="/todo">
          <li>Todo-app</li>
        </Link>
      </ul>
    </nav>
  );
};

Nav.propTypes = {
  className: PropTypes.instanceOf(String).isRequired,
  onclickFunction: PropTypes.func.isRequired,
  closeFunction: PropTypes.func.isRequired,
};

export default Nav;
/* eslint-disable */