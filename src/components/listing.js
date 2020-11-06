import React from "react"
import styled from "styled-components"
import { graphql, Link, useStaticQuery } from "gatsby"

import SEO from "../components/seo"

const LISTING_QUERY = graphql`
  query blogPostListing {
    allMarkdownRemark(
      limit: 5
      sort: { order: ASC, fields: frontmatter___date }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            slug
          }
        }
      }
    }
  }
`

const Post = styled.article`
  box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.05);
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  a {
    color: black;
    text-decoration: none;
  }
  h2 {
    margin-bottom: 0;
  }
  p {
    font-size: 0.9rem;
  }
  .read-more {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 0.9rem;
    text-decoration: underline;
    color: #524763;
  }
`

const Listing = () => {
  const { allMarkdownRemark } = useStaticQuery(LISTING_QUERY)

  const articles = allMarkdownRemark.edges.length ? (
    allMarkdownRemark.edges.map(({ node }) => (
      <Post key={node.frontmatter.slug}>
        <Link to={`/posts/${node.frontmatter.slug}`}>
          <h2>{node.frontmatter.title}</h2>
        </Link>
        <p>{node.frontmatter.date}</p>
        <p>{node.excerpt}</p>
        <Link className="read-more" to={`/posts/${node.frontmatter.slug}`}>
          Read More
        </Link>
      </Post>
    ))
  ) : (
    <p>We could not find any articles</p>
  )

  return (
    <>
      <SEO title="Home" />
      {articles}
    </>
  )
}

export default Listing
