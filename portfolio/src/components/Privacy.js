import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const PrivacyContainer = styled.div`
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

const Privacy = () => (
  <PrivacyContainer>
    <Heading
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      Privacy Policy
    </Heading>
    <Text
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      This is the privacy policy of the website. We respect your privacy and are committed to protecting your personal information. If you have any questions about this privacy policy, please contact us at <a href="mailto:zzm22@ic.ac.uk">zzm22@ic.ac.uk</a>.
    </Text>
  </PrivacyContainer>
);

export default Privacy;
