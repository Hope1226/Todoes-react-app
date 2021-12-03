/* eslint-disable */
import React from 'react';
import './nav.css';
import PropTypes from 'prop-types';

const Nav = (props) => {
  const { className, onclickFunction, closeFunction } = props;

  return (
    <nav className={className}>
      <ul>
        <li onClick={closeFunction}>X</li>
        <li onClick={onclickFunction}>Home</li>
        <li onClick={onclickFunction}>About</li>
        <li onClick={onclickFunction}>Contacts</li>
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