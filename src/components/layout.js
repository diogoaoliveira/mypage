import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { StaticQuery, graphql, Link } from 'gatsby';
import myFontURL from '../assets/fonts/Louis-George-Cafe-Light.ttf';
import myFontBoldURL from '../assets/fonts/Louis-George-Cafe.ttf';
import Profile from './Profile';

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: Louis-George-Cafe-Light;
    font-style:  normal;
  font-weight: 400;
  font-display: swap;
    src: url(${myFontURL});
  }

  @font-face {
    font-family: Louis-George-Cafe-Light;
  font-style:  normal;
  font-weight: 700;
  font-display: swap;
  src: url(${myFontBoldURL});
}

  * {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

html {
  font-family: Louis-George-Cafe-Light;
  text-rendering: optimizeLegibility;
  box-sizing: border-box;
  -ms-overflow-style: scrollbar;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

body { overflow: hidden;}
`;

const MainContainer = styled.main`
  display: flex;
  width: 100%;
  max-width: 1444px;
  margin: 0 0 0 auto;
  flex-direction: row;

  @media only screen and (max-width: 420px) {
    /* display: block; */
    /* height: auto; */
  }
`;

const LayoutContainer = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow-y: scroll;
  height: 100vh;
  padding: 0 60px 0 10%;
  /* padding: 50px 250px 25px 200px; */
  /* overflow: scroll; */
  @media only screen and (max-width: 420px) {
    /* overflow: auto; */
    /* padding: 20px; */
  }
`;

const Divider = styled.div`
  background-color: #e0e0e0;
  height: 100%;
  width: 1px;
  position: absolute;
  top: 0;
  right: 50%;
`;

const Navbar = styled.nav`
  margin-top: 50px;
`;

const NavLine = styled.div`
  width: 150px;
  height: 2px;
  background-color: #235bc5;
  margin-top: 20px;
  transition: all ease-in-out 0.3s;
  ${({ active }) =>
    active === 'works'
      ? `transform: translate(135px)`
      : active === 'blog' && `transform: translate(270px)`}
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${({ active }) => (active ? `#235bc5` : `#757575`)};
  font-weight: 600;
  display: inline-block;
  margin: 0 3em;

  &:nth-child(1):hover {
    color: #235bc5;
    transition: all ease-in-out 0.3s;
  }

  &:nth-child(2):hover {
    color: #235bc5;
    transition: all ease-in-out 0.3s;
  }

  &:nth-child(3):hover {
    color: #235bc5;
    transition: all ease-in-out 0.3s;
  }

  &:nth-child(1):hover ~ ${NavLine} {
    transform: translate(0);
    transition: all ease-in-out 0.3s;
  }

  &:nth-child(2):hover ~ ${NavLine} {
    transform: translate(135px);
    transition: all ease-in-out 0.3s;
  }

  &:nth-child(3):hover ~ ${NavLine} {
    transform: translate(${135 * 2}px);
    transition: all ease-in-out 0.3s;
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
    const { children, currentPage } = this.props;
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
          <React.Fragment>
            <GlobalStyle />
            <MainContainer>
              <Profile profile={contentfulMainPage.profile} />
              <Divider />
              <LayoutContainer>
                <Navbar>
                  <NavLink active={currentPage === 'about'} to="/">
                    About
                  </NavLink>
                  <NavLink active={currentPage === 'works'} to="/works">
                    Works
                  </NavLink>
                  <NavLink active={currentPage === 'blog'} to="/blog">
                    Blog
                  </NavLink>
                  <NavLine active={currentPage} />
                </Navbar>
                {children}
              </LayoutContainer>
            </MainContainer>
          </React.Fragment>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
