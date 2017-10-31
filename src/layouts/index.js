import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import favicon from '../../favicon.ico'
import './index.scss'

const Header = () => (
  <div className="header">
    <div className="branding">
      <h1>
        <Link to="/">
          Eric Sartorius
        </Link>
      </h1>
    </div>
  </div>
)

const Subheader = () => (
  <div className="subheader">
    <ul>
      <li><Link to="/about/">About</Link></li>
      <li><Link to="/work">Work</Link></li>
      <li><Link to="/contact/">Contact</Link></li>
    </ul>
    <hr className="underline" />
  </div>
)

const Footer = () => (
  <div className="footer">
    <ul>
      <li><a href="https://github.com/ericssartorius">Github</a></li>
      <li><a href="http://www.linkedin.com/in/ericsartorius/">Linkedin</a></li>
      <li><a href="http://twitter.com/the_epic_life">Twitter</a></li>
      <li><a href="https://dribbble.com/ericssartorius">Dribble</a></li>
    </ul>
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

    >  
      <link rel="shortcut icon" type="image/png" href={favicon} />
      <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
    </Helmet>
    <Header />
    <Subheader />
    <div className="index">
      {children()}
    </div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
