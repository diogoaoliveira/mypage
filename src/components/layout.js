import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import './layout.css';

const MainContainer = styled.main`
  display: flex;
  height: 100vh;

  @media only screen and (max-width: 420px) {
    display: block;
    height: auto;
  }
`;

const ProfileContainer = styled.section`
  background-color: #34495e;
  width: 360px;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  padding: 50px 25px;
  color: white;

  @media only screen and (max-width: 420px) {
    width: auto;
    max-width: none;
  }
`;

const Info = styled.div`
  padding: 0 30px;

  h3,
  h4 {
    margin-bottom: 10px;
  }

  @media only screen and (max-width: 420px) {
    h3,
    h3 ~ p {
      text-align: center;
    }
  }
`;

const LayoutContainer = styled.section`
  padding: 50px 250px 25px 200px;
  overflow: scroll;
  @media only screen and (max-width: 420px) {
    overflow: auto;
    padding: 20px;
  }
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
        contentfulMainPage {
          profile {
            name
            job
            email
            github
            photo {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    `}
    render={({ site, contentfulMainPage: { profile } }) => (
      <MainContainer>
        <ProfileContainer>
          {/* <div
              style={{
                backgroundColor: '#bdc3c7',
                height: 180,
                width: 180,
                borderRadius: 90,
                alignSelf: 'center',
                marginBottom: 50,
              }}
            /> */}

          <Img
            fluid={profile.photo.fluid}
            style={{ width: 200, marginBottom: 50, alignSelf: 'center' }}
          />

          <Info>
            <h3>{profile.name}</h3>
            <p>{profile.job}</p>
          </Info>

          <Info>
            <h4>Email</h4>
            <p>{profile.email}</p>
          </Info>

          <Info>
            <h4>Github</h4>
            <p>github.com/{profile.github}</p>
          </Info>
        </ProfileContainer>
        <LayoutContainer>
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </LayoutContainer>
      </MainContainer>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
