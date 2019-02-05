import React from 'react';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import ExperienceList from '../components/ExperienceList';
import WorkList from '../components/WorkList';
import Skill from '../components/skill';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h2>Objective</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et
      elit vitae dui fringilla auctor. Nunc vitae dignissim erat. Mauris sit
      amet ante nisi. Phasellus vel sagittis purus. Fusce magna urna, luctus ut
      dolor quis, mattis accumsan purus. Nunc auctor faucibus leo vel eleifend.
      Aliquam commodo diam vitae posuere iaculis. Proin ac magna et eros viverra
      cursus sed non metus.
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <h2>Experience</h2>
    <ExperienceList />
    <h2>Work</h2>
    <WorkList />
    <h2>Skills</h2>
    <Skill />
  </Layout>
);

export default IndexPage;
