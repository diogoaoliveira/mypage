import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import posed from 'react-pose';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import './layout.css';
import Profile from './Profile';

const MainContainer = styled.main`
  display: flex;
  height: 100vh;

  @media only screen and (max-width: 420px) {
    display: block;
    height: auto;
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
    render={({ site, contentfulMainPage }) => (
      <MainContainer>
        <Profile profile={contentfulMainPage.profile} />
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
