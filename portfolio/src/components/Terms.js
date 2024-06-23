import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const TermsContainer = styled.div`
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

const Terms = () => (
  <TermsContainer>
    <Heading
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      Terms and Conditions
    </Heading>
    <Text
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      These are the terms and conditions of the website. By using this website, you agree to comply with and be bound by the following terms and conditions of use. If you disagree with any part of these terms and conditions, please do not use our website.
    </Text>
  </TermsContainer>
);

export default Terms;
