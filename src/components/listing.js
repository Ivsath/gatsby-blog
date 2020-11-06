import React from "react"
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

const Listing = () => {
  const { allMarkdownRemark } = useStaticQuery(LISTING_QUERY)

  const articles = allMarkdownRemark.edges.length ? (
    allMarkdownRemark.edges.map(({ node }) => (
      <article key={node.frontmatter.slug}>
        <h2>{node.frontmatter.title}</h2>
        <p>{node.frontmatter.date}</p>
        <p>{node.excerpt}</p>
        <Link to={`/posts/${node.frontmatter.slug}`}>Read More</Link>
      </article>
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
