import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  padding: 20px;

  h2 {
    color: #003E74;
  }
`;

const About = () => (
  <AboutContainer>
    <h2>About Me</h2>
    <p>I am a second-year student at Imperial College London with a keen interest in data science, technology, and finance.</p>
  </AboutContainer>
);

export default About;
