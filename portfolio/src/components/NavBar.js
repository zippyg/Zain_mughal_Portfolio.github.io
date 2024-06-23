import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #003E74;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
`;

const NavLink = styled(Link)`
  color: #e0e0e0;
  padding: 10px 20px;
  text-decoration: none;
  &:hover {
    background-color: #00294D;
  }
`;

const NavBar = () => {
  return (
    <Nav>
      <div><strong>Zain Mughal's Portfolio</strong></div>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/cv">CV</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </Nav>
  );
};

export default NavBar;
