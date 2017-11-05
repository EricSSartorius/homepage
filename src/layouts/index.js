import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import favicon from '../../favicon.ico'
import Header from '../components/header'
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

class TemplateWrapper extends React.Component {
  render() {
      return (<div>
        <Helmet
          title="Eric Sartorius"
          meta={[
            { name: 'description', content: 'A homepage for Eric Sartorius.' },
            { name: 'keywords', content: 'homepage, eric sartorius, freelancer, front-end developer' },
            { property: 'twitter:card', content: 'summary'},
            { property: 'twitter:site', content: '@the_epic_life' },
            { property: 'twitter:title', content: 'Eric Sartorius' },
            { property: 'twitter:description', content: 'A homepage for Eric Sartorius' },
            { property: 'twitter:creator', content: 'Eric Sartorius' },
            { property: 'twitter:image', content: '/images/digitalnobad3.jpg' },
            { property: 'og:title', content: 'Eric Sartorius' },
            { property: 'og:url', content: 'http://ericsartorius.com' },
            { property: 'og:image', content: '/images/digitalnobad3.jpg' },
            { property: 'og:description', content: 'A homepage for Eric Sartorius' },
            { property: 'og:site_name', content: 'Eric Sartorius' },
          ]}
        >
          <link rel="shortcut icon" type="image/png" href={favicon} />
          <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
        </Helmet>
        <Header pathname={this.props.location.pathname === "/" ? "light-menu" : ""} />
        <main >
          {this.props.children()}
        </main>
        <Footer />
      </div>)
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
