import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const GrayPhoto = styled.div`
  height: 200px;
  width: 220px;
  background-color: gray;
`;

const ProjectTitle = styled.p`
  margin-top: 10px;
`;

const WorkList = () => (
  <Container>
    <div>
      <GrayPhoto />
      <ProjectTitle>Project 1</ProjectTitle>
    </div>
    <div>
      <GrayPhoto />
      <ProjectTitle>Project 2</ProjectTitle>
    </div>
    <div>
      <GrayPhoto />
      <ProjectTitle>Project 3</ProjectTitle>
    </div>
    <div>
      <GrayPhoto />
      <ProjectTitle>Project 4</ProjectTitle>
    </div>
    <div>
      <GrayPhoto />
      <ProjectTitle>Project 5</ProjectTitle>
    </div>
    <div>
      <GrayPhoto />
      <ProjectTitle>Project 6</ProjectTitle>
    </div>
  </Container>
);

export default WorkList;
