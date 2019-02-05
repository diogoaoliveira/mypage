import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Skill = () => (
  <Container>
    <img
      style={{ height: 40 }}
      src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
      alt=""
    />
    <h4 style={{ marginLeft: 10 }}>React.js</h4>
  </Container>
);

export default Skill;
