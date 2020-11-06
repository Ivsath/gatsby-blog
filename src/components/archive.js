import React from "react"
import styled from "styled-components"
import { Link, useStaticQuery, graphql } from "gatsby"

import Image from "./image"

const POST_ARCHIVE_QUERY = graphql`
  query blogPostArchive {
    allMarkdownRemark(
      limit: 5
      sort: { order: ASC, fields: frontmatter___date }
    ) {
      edges {
        node {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`

const ArchiveList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  a {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 0.9rem;
    text-decoration: underline;
    color: #524763;
  }
`

const Archive = () => {
  const { allMarkdownRemark } = useStaticQuery(POST_ARCHIVE_QUERY)

  return (
    <aside>
      <h3>Archive</h3>
      <ArchiveList>
        {allMarkdownRemark.edges.map(edge => {
          const { slug, title } = edge.node.frontmatter
          return (
            <li key={slug}>
              <Link to={`/posts/${slug}`}>{title}</Link>
            </li>
          )
        })}
      </ArchiveList>
      <div style={{ maxWidth: `200px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </aside>
  )
}

export default Archive
