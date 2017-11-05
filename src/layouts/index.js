import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import favicon from '../../favicon.ico'
import Header from '../templates/header'
import './index.scss'

const Footer = () => (
  <footer className="footer">
    <ul>
      <li><a href="https://github.com/ericssartorius" target="_blank">Github</a></li>
      <li><a href="http://www.linkedin.com/in/ericsartorius/" target="_blank">Linkedin</a></li>
      <li><a href="http://twitter.com/the_epic_life" target="_blank">Twitter</a></li>
      <li><a href="https://dribbble.com/ericssartorius" target="_blank">Dribble</a></li>
    </ul>
  </footer>
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
    <main>
      {children()}
    </main>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
