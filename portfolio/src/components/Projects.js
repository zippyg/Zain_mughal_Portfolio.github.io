import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ProjectsContainer = styled.div`
  padding: 2rem;
  background-color: #f5f5f5;
`;

const Heading = styled(motion.h1)`
  font-size: 3rem;
  color: #333;
`;

const ProjectList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const ProjectCard = styled(Link)`
  background-color: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: #333;
  flex: 1 1 calc(33% - 1rem);
  margin-bottom: 1rem;
`;

const ProjectTitle = styled(motion.h2)`
  font-size: 1.5rem;
`;

const Projects = () => (
  <ProjectsContainer>
    <Heading
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      Projects
    </Heading>
    <ProjectList>
      <ProjectCard to="/projects/1">
        <ProjectTitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Project 1
        </ProjectTitle>
      </ProjectCard>
      <ProjectCard to="/projects/2">
        <ProjectTitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          Project 2
        </ProjectTitle>
      </ProjectCard>
      <ProjectCard to="/projects/3">
        <ProjectTitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5 }}
        >
          Project 3
        </ProjectTitle>
      </ProjectCard>
    </ProjectList>
  </ProjectsContainer>
);

export default Projects;
