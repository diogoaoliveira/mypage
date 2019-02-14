import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import ExperienceList from '../components/ExperienceList';
import WorkList from '../components/WorkList';
import Skill from '../components/skill';

const IndexPage = ({ data: { contentfulMainPage } }) =>
  console.log(contentfulMainPage) || (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h2>Introduction</h2>
      <p>{contentfulMainPage.introduction.introduction}</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <h2>Experience</h2>
      <ExperienceList experiences={contentfulMainPage.experiences} />
      <h2>Work</h2>
      <WorkList projects={contentfulMainPage.projects} />
      <h2>Skills</h2>
      <Skill />
    </Layout>
  );

export const MainPageQuery = graphql`
  query MainPageQuery {
    contentfulMainPage {
      introduction {
        introduction
      }
      profile {
        name
        job
        email
        github
        photo {
          fluid {
            src
          }
        }
      }
      experiences {
        position
        period
        company
        description {
          description
        }
      }
      projects {
        title
        url
        projectImage {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`;

export default IndexPage;
