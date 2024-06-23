import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ProjectsContainer = styled.section`
  padding: 20px;

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
  }

  .project-tile {
    background-color: #2E2E2E;
    padding: 20px;
    border: 1px solid #003E74;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      background-color: #003E74;
      color: #e0e0e0;
    }
  }
`;

const Projects = () => (
  <ProjectsContainer>
    <h2>Projects</h2>
    <div className="grid">
      {[...Array(6)].map((_, i) => (
        <Link key={i} to={`/projects/project${i + 1}`}>
          <div className="project-tile">
            <h3>Project Title {i + 1}</h3>
            <p>Brief description of Project {i + 1}.</p>
          </div>
        </Link>
      ))}
    </div>
  </ProjectsContainer>
);

export default Projects;
