import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import logo from "../images/logo.svg"

const HeaderWrapper = styled.div`
  background: #524763;
  vertical-align: middle;
  img {
    margin-bottom: 0;
    max-width: 50px;
  }
`

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1rem;
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}>
          <img src={logo} alt="Blog Logo" />
          {siteTitle}
        </Link>
      </h1>
    </HeaderContainer>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
