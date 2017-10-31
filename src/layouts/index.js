import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import favicon from '../../favicon.ico'
import './index.scss'

const Header = () => (
  <header>
    <h1>
      <Link to="/">
        Eric Sartorius
      </Link>
    </h1>
  </header>
)

const Nav = () => (
  <aside>
    <nav>
      <ul>
        <li className="nav"><Link to="/about/">About</Link></li>
        <li className="nav"><Link to="/contact/">Contact</Link></li>
        <li className="nav nav-work"><Link to="/work">Work</Link></li>
        <li className="sub-nav"><Link to="/work">
          Web Dev/Design</Link>
        </li>
        <li className="sub-nav"><Link to="/work">
          Translation/Subtitling</Link>
        </li>
        <li className="sub-nav"><Link to="/work">
          Modeling</Link>
        </li>
        <li className="sub-nav sub-nav-movement"><Link to="/work">
          Movement Coaching</Link>
        </li>
      </ul>
    </nav>
  </aside>
)

const Footer = () => (
  <footer className="footer">
    <ul>
      <li><a href="https://github.com/ericssartorius">Github</a></li>
      <li><a href="http://www.linkedin.com/in/ericsartorius/">Linkedin</a></li>
      <li><a href="http://twitter.com/the_epic_life">Twitter</a></li>
      <li><a href="https://dribbble.com/ericssartorius">Dribble</a></li>
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
    <div className="container">
      <Nav />
      <main>
        {children()}
      </main>
    </div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
