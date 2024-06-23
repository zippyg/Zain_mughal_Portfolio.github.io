import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #333;
  color: #fff;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const NavBar = () => (
  <Nav>
    <h1>My Portfolio</h1>
    <NavLinks>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/cv">CV</Link>
      <Link to="/contact">Contact</Link>
    </NavLinks>
  </Nav>
);

export default NavBar;
