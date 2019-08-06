import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import BlogPost from '../components/BlogPost';

const Wrapper = styled.div`
  margin-top: 45px;
`;

const BlogPage = ({ data: { contentfulBlogPage } }) => (
  <Layout currentPage="blog">
    <SEO title="Blog" />
    <Wrapper>
      {contentfulBlogPage.posts.length > 0 &&
        contentfulBlogPage.posts.map(post => (
          <BlogPost key={post.title} post={post} />
        ))}
    </Wrapper>
  </Layout>
);

export const BlogPageQuery = graphql`
  query BlogPageQuery {
    contentfulBlogPage {
      posts {
        shortDescription {
          shortDescription
        }
        content {
          content
        }
        title
        date
      }
    }
  }
`;

export default BlogPage;
