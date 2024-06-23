import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const ProjectContainer = styled.div`
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

const Project = () => {
  const { id } = useParams();

  return (
    <ProjectContainer>
      <Heading
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Project {id}
      </Heading>
      <Text
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        Detailed information about project {id}.
      </Text>
    </ProjectContainer>
  );
};

export default Project;
