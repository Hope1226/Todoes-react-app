/* eslint-disable */
import React from 'react';
import './nav.css';
import PropTypes from 'prop-types';

const Nav = (props) => {
  const { className, onclickFunction, closeFunction } = props;

  return (
    <nav className={className}>
      <ul>
        <li>
          <a href="#" onClick={closeFunction}>X</a>
        </li>
        <li>
          <a href="#" onClick={onclickFunction}>Home</a>
        </li>
        <li>
          <a href="#" onClick={onclickFunction}>About</a>
        </li>
        <li>
          <a href="#" onClick={onclickFunction}>Contacts</a>
        </li>
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