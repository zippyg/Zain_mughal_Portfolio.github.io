import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const AboutContainer = styled.div`
  padding: 2rem;
  background-color: #f5f5f5;
`;

const Heading = styled(motion.h1)`
  font-size: 3rem;
  color: #333;
`;

const Text = styled(motion.p)`
  font-size: 1.5rem;
  color: #666;
`;

const About = () => (
  <AboutContainer>
    <Heading
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      About Me
    </Heading>
    <Text
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      I am a passionate developer with experience in building modern web applications.
    </Text>
  </AboutContainer>
);

export default About;
