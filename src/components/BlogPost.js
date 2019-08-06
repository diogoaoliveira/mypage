import React from 'react';
import styled from 'styled-components';

const PostDate = styled.h6`
  margin-bottom: 12px;
`;

const PostTitle = styled.h3`
  margin-bottom: 16px;
`;

const ShortDescription = styled.p`
  line-height: 1.25;
  margin-bottom: 44px;
  color: #757575;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #f1f1f1;
  margin-bottom: 44px;
`;

const BlogPost = ({ post }) => (
  <section>
    <PostDate>{post.date}</PostDate>
    <PostTitle>{post.title}</PostTitle>
    <ShortDescription>
      {post.shortDescription.shortDescription}
    </ShortDescription>
    <Divider />
  </section>
);

export default BlogPost;
