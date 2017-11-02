import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import favicon from '../../favicon.ico'
import Header from '../templates/header'
import './index.scss'

// const Header = () => (
//   <header className={window.location.pathname === "/" ? "light-logo" : ""}>
//     <h1>
//       <Link to="/">
//         Eric Sartorius
//       </Link>
//     </h1>
//     <div class="wrapper-menu">
//       <div class="line-menu half start"></div>
//       <div class="line-menu"></div>
//       <div class="line-menu half end"></div>
//     </div>
//   </header>
// )

// const Nav = () => (
//   <nav className={window.location.pathname === "/" ? "light-nav" : ""}>
//     <ul>
//       <li className="nav">
//         <Link to="/about/" activeClassName="active" >About</Link>
//       </li>
//       <li className="nav">
//         <a href="http://iamtheepic.com" target="_blank">Blog</a>
//       </li>
//       <li className="nav">
//         <Link to="/contact/" activeClassName="active" >Contact</Link>
//       </li>
//       <li className="nav nav-work">
//         <Link to="/work" activeClassName="active" >Work</Link>
//       </li>
//       <li className="sub-nav">
//         <Link to="/work-dev" activeClassName="active" >
//         Web Dev/Design</Link>
//       </li>
//       <li className="sub-nav">
//         <Link to="/work-trans" activeClassName="active" >
//         Translation/Subtitling</Link>
//       </li>
//       <li className="sub-nav">
//         <Link to="/work-model" activeClassName="active" >
//         Modeling</Link>
//       </li>
//       <li className="sub-nav sub-nav-movement">
//         <Link to="/work-movement" activeClassName="active" >
//         Movement Coaching</Link>
//       </li>
//     </ul>
//   </nav>
// )

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
    {/* <aside className="closed">
      <Nav />
    </aside> */}
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
