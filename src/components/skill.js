import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  @media only screen and (max-width: 420px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 10px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  margin-right: 10px;
`;

const SkillName = styled.h4`
  align-self: center;
  margin: 0;
  padding: 5px;
`;

const SkillImage = styled(Img)`
  width: 50px;
`;

const Skill = ({ skills }) => (
  <Container>
    {skills.map(skill => (
      <ImageContainer key={skill.name}>
        <SkillImage fluid={skill.image.fluid} />
        <SkillName>{skill.name}</SkillName>
      </ImageContainer>
    ))}
  </Container>
);

export default Skill;
