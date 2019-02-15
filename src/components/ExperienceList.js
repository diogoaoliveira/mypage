import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
const Container = styled.div``;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    border: 1px dashed #aaa;
  }
`;

const Experience = styled.li`
  margin: 20px;
  position: relative;
  margin-bottom: 50px;
`;

const TimelineMark = styled.span`
  content: '';
  position: absolute;
  top: 0;
  left: -20px;
  width: 0;
  height: 100%;
  border: 1px solid #aaa;

  &::before {
    content: '';
    width: 12px;
    height: 12px;
    border: 2px solid #aaa;
    position: absolute;
    border-radius: 50%;
    left: -6px;
    background: white;
    top: 3px;
  }
`;

const Position = styled.h4`
  margin-bottom: 10px;
`;

const ExperienceList = ({ experiences }) => (
  <Container>
    <List>
      {experiences.map(experience => (
        <Experience key={experience.period}>
          <TimelineMark />
          <p>{experience.period}</p>
          <Position>
            {experience.position} @{experience.company}
          </Position>
          <ReactMarkdown source={experience.description.description} />
        </Experience>
      ))}
    </List>
  </Container>
);

export default ExperienceList;
