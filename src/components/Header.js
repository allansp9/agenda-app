import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ children }) => <header className="aside__header">{children}</header>;

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
