import * as React from "react";
import Blog from "../pages/blog";

export default Blog;

export const pageQuery = `
query TagPage($tag: String) {
  # Get tags
  tags: allMarkdownRemark(frontmatter: {draft: {ne: true}}) {
    groupBy(field: frontmatter___tags) {
      fieldValue
      totalCount
    }
  }

  # Get posts
  posts: allMarkdownRemark(
    sortBy: { order: DESC, fields: [frontmatter___updatedDate] },
    frontmatter: {
      draft: { ne: true }
    	tags: { in: [$tag] }
    },
    fileAbsolutePath: { regex: "/blog/" },
  ) {
    edges {
      node {
        excerpt
        timeToRead
        slug
        frontmatter {
          title
          updatedDate(formatString: "DD MMMM, YYYY")
          image {
          	children {
              ... on ImageSharp {
                responsiveResolution(width: 700, height: 100) {
                  src
                  srcSet
                }
              }
            }
          }
          author {
            id
            avatar {
              children {
                ... on ImageSharp {
                  responsiveResolution(width: 35, height: 35) {
                    src
                    srcSet
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`;