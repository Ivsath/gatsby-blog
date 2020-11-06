/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { useSpring, animated } from "react-spring"
import Img from "gatsby-image"
import styled from "styled-components"

import Archive from "./archive"
import Header from "./header"
import "./layout.css"

const MainWrapper = styled.main`
  max-width: 90%;
  margin: 1rem auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 30px;
`

const FooterWrapper = styled.footer`
  max-width: 90%;
  margin: 2rem auto;
`

const Layout = ({ location, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      file(relativePath: { regex: "/bg/" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const props = useSpring({
    to: { height: location.pathname === "/" ? 300 : 100 },
    from: { height: location.pathname === "/" ? 100 : 300 },
  })

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <animated.div style={{ overflow: "hidden", ...props }}>
        <Img fluid={data.file.childImageSharp.fluid} />
      </animated.div>
      <MainWrapper>
        <div>{children}</div>
        <Archive />
      </MainWrapper>
      <FooterWrapper>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </FooterWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  location: {},
}

export default Layout
