import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Nav from './nav'

const Header = ({ siteTitle }) => (
  <header>
  <Nav />
  <Nav />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
