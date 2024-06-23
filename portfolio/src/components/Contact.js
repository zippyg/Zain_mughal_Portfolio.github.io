import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const ContactContainer = styled.div`
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

const Contact = () => (
  <ContactContainer>
    <Heading
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      Contact Me
    </Heading>
    <Text
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      You can reach me at <a href="mailto:zzm22@ic.ac.uk">zzm22@ic.ac.uk</a>.
    </Text>
  </ContactContainer>
);

export default Contact;
