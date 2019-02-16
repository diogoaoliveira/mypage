import React from 'react';
import PropTypes from 'prop-types';
import posed, { PoseGroup } from 'react-pose';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
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

const AnimatedLayout = posed.section({
  enter: { opacity: 1, delay: 1000 },
  exit: { opacity: 0 },
});

const LayoutContainer = styled(AnimatedLayout)`
  padding: 50px 250px 25px 200px;
  overflow: scroll;
  @media only screen and (max-width: 420px) {
    overflow: auto;
    padding: 20px;
  }
`;

class Layout extends React.Component {
  state = {
    render: false,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        render: !this.state.render,
      });
    }, 1000);
  }

  render() {
    const { children } = this.props;
    return (
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
            <PoseGroup>
              {this.state.render && [
                <Profile key="profile" profile={contentfulMainPage.profile} />,
                <LayoutContainer key="mainpage">
                  <main>{children}</main>
                  <footer>
                    © {new Date().getFullYear()}, Built with
                    {` `}
                    <a href="https://www.gatsbyjs.org">Gatsby</a>
                  </footer>
                </LayoutContainer>,
              ]}
            </PoseGroup>
          </MainContainer>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
