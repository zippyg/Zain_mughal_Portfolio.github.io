import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 1rem;
  background-color: #333;
  color: #fff;
  text-align: center;
`;

const Footer = () => (
  <FooterContainer>
    <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
  </FooterContainer>
);

export default Footer;
