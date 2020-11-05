import React from "react"
import { graphql } from "gatsby"

import Layout from "./layout"

export default function ({ data }) {
  const { markdownRemark } = data

  return (
    <Layout>
      <h1>{markdownRemark.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }}></div>
    </Layout>
  )
}

// $slug comes from the context in "gatsby-node.js"
// It only works because the name matches on both sides
export const query = graphql`
  query postQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        slug
        date
      }
    }
  }
`
