import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.scss'

const Header = () => (
  <div className="header">
    <div className="branding">
      <h1>
        <Link to="/">
          Eric's Homepage
        </Link>
      </h1>
    </div>
  </div>
)

const Footer = () => (
  <div className="footer">
    <div className="branding">
      <Link to="/">
        Eric's Homepage
      </Link>
    </div>
    <Link to="/about/">About</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/blog/">Blog</Link>
    <Link to="/contact/">Contact</Link>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Eric Sartorius"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
