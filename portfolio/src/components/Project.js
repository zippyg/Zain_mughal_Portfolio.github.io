import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const ProjectContainer = styled.section`
  padding: 20px;

  h2 {
    color: #003E74;
  }

  figure {
    margin: 20px 0;

    img {
      max-width: 100%;
      border-radius: 5px;
    }

    figcaption {
      text-align: center;
      margin-top: 10px;
    }
  }
`;

const Project = () => {
  const { id } = useParams();

  return (
    <ProjectContainer>
      <h2>Project Title {id}</h2>
      <p>This is a detailed description of Project {id}. Explain what the project is about, the technologies used, and any challenges faced.</p>
      <figure>
        <img src={`/assets/images/project${id}.jpeg`} alt={`Project ${id}`} />
        <figcaption><a href="#" target="_blank">View Project Files</a></figcaption>
      </figure>
      <h3>Technologies Used</h3>
      <p>List the technologies used in the project.</p>
      <h3>Challenges</h3>
      <p>Describe any challenges faced during the project and how they were overcome.</p>
    </ProjectContainer>
  );
};

export default Project;
