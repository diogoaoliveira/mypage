import React from 'react';
import styled from 'styled-components';

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

  &::before {
  }
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

const ExperienceList = () => (
  <Container>
    <List>
      <Experience>
        <TimelineMark />
        <p>2010 - present</p>
        <Position>Position @Company Inc.</Position>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          et elit vitae dui fringilla auctor. Nunc vitae dignissim erat. Mauris
          sit amet ante nisi. Phasellus vel sagittis purus. Fusce magna urna,
          luctus ut dolor quis, mattis accumsan purus. Nunc auctor faucibus leo
          vel eleifend. Aliquam commodo diam vitae posuere iaculis. Proin ac
          magna et eros viverra cursus sed non metus.
        </p>
      </Experience>
      <Experience>
        <TimelineMark />
        <p>2008 - 2010</p>
        <Position>Position @Company Inc.</Position>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          et elit vitae dui fringilla auctor. Nunc vitae dignissim erat. Mauris
          sit amet ante nisi. Phasellus vel sagittis purus. Fusce magna urna,
          luctus ut dolor quis, mattis accumsan purus. Nunc auctor faucibus leo
          vel eleifend. Aliquam commodo diam vitae posuere iaculis. Proin ac
          magna et eros viverra cursus sed non metus.
        </p>
      </Experience>
      <Experience>
        <TimelineMark />
        <p>2006 - 2008</p>
        <Position>Position @Company Inc.</Position>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          et elit vitae dui fringilla auctor. Nunc vitae dignissim erat. Mauris
          sit amet ante nisi. Phasellus vel sagittis purus. Fusce magna urna,
          luctus ut dolor quis, mattis accumsan purus. Nunc auctor faucibus leo
          vel eleifend. Aliquam commodo diam vitae posuere iaculis. Proin ac
          magna et eros viverra cursus sed non metus.
        </p>
      </Experience>
    </List>
  </Container>
);

export default ExperienceList;
