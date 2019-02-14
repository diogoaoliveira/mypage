import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const ProjectImage = styled(Img)`
  height: 200px;
  max-width: 220px;
`;

const GrayPhoto = styled.div`
  height: 200px;
  width: 220px;
  cursor: pointer;
  background-color: gray;
`;

const ProjectTitle = styled.p`
  margin-top: 10px;
`;

const WorkList = ({ projects }) => (
  <Container>
    {projects.map(project => (
      <div key={project.title}>
        {project.projectImage.fluid.src ? (
          <a href={project.url} rel="noopener noreferrer" target="_blank">
            <ProjectImage
              onClick={() => console.log('Test!')}
              fluid={project.projectImage.fluid}
            />
          </a>
        ) : (
          <GrayPhoto />
        )}
        <ProjectTitle>{project.title}</ProjectTitle>
      </div>
    ))}
  </Container>
);

export default WorkList;
