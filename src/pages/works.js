import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Works = () => (
  <Layout currentPage="works">
    <SEO title="Works" />
    <h1 style={{ marginTop: 45 }}>Works</h1>
    <p>Welcome to Works</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default Works;
