import React from 'react';
import SEO from '../../components/seo';
import PostDetails from '../../components/post';
import { graphql } from 'gatsby';

export default function Post({ data: graphqlData }) {
  const { frontmatter: post, html } = graphqlData.markdownRemark;

  return (
    <>
      <SEO title={post.title} />
      <PostDetails
        post={post}
        content={html}
      />
    </>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html,
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        cover
        coverCredit
        author {
          name
          title
          phrase
          photo
        }
      }
    }
  }
`;