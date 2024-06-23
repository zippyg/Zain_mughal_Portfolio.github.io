import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

const Heading = styled(motion.h1)`
  font-size: 4rem;
  color: #333;
`;

const Home = () => (
  <HomeContainer>
    <Heading
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Welcome to My Portfolio
    </Heading>
  </HomeContainer>
);

export default Home;
