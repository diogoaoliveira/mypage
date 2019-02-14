import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import './layout.css';

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
      <main style={{ display: 'flex', height: '100vh' }}>
        <section
          style={{
            backgroundColor: '#34495e',
            width: 360,
            maxWidth: 360,
            display: 'flex',
            flexDirection: 'column',
            padding: '50px 25px',
            color: 'white',
          }}
        >
          <div
            style={{
              backgroundColor: '#bdc3c7',
              height: 180,
              width: 180,
              borderRadius: 90,
              alignSelf: 'center',
              marginBottom: 50,
            }}
          />

          <div style={{ padding: '0 30px' }}>
            <h3 style={{ marginBottom: 10 }}>{profile.name}</h3>
            <p>{profile.job}</p>
          </div>

          <div style={{ padding: '0 30px' }}>
            <h4 style={{ marginBottom: 10 }}>Email</h4>
            <p>{profile.email}</p>
          </div>

          <div style={{ padding: '0 30px' }}>
            <h4 style={{ marginBottom: 10 }}>Github</h4>
            <p>github.com/{profile.github}</p>
          </div>
        </section>
        <section
          style={{
            padding: '50px 250px 25px 200px',
            overflow: 'scroll',
          }}
        >
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </section>
      </main>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
