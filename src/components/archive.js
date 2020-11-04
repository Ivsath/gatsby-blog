import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const POST_ARCHIVE_QUERY = graphql`
  query blogPostArchive {
    allMarkdownRemark {
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

const Archive = () => {
  const { allMarkdownRemark } = useStaticQuery(POST_ARCHIVE_QUERY)

  return (
    <>
      <aside>
        <h3>Archive</h3>
        <ul>
          {allMarkdownRemark.edges.map(edge => {
            const { slug, title } = edge.node.frontmatter
            return (
              <li key={slug}>
                <Link to={`/posts/${slug}`}>{title}</Link>
              </li>
            )
          })}
        </ul>
      </aside>
    </>
  )
}

export default Archive
