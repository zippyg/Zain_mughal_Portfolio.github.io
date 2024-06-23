import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const CVContainer = styled.div`
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

const CV = () => (
  <CVContainer>
    <Heading
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      Curriculum Vitae
    </Heading>
    <Text
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      Here you can find my professional experience and education.
    </Text>
    <a href="portfolio/public/Zain Mughal NP CV - MSci .pdf" target="_blank" rel="noopener noreferrer">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{ padding: '0.5rem 1rem', fontSize: '1rem' }}
      >
        Download CV
      </motion.button>
    </a>
  </CVContainer>
);

export default CV;
