import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  text-align: center;
  padding: 20px 0;
  background-color: #003E74;
  color: #e0e0e0;
  margin-top: 40px;
  flex-shrink: 0;
  width: 100%;
  position: relative;
  bottom: 0;

  small a {
    color: #e0e0e0;
    text-decoration: none;
    margin: 0 10px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer = () => (
  <FooterContainer>
    <small><a href="/privacy">Privacy Policy</a> • <a href="/terms">Terms of Service</a></small>
  </FooterContainer>
);

export default Footer;
