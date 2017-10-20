import React from 'react'
import Link from 'gatsby-link'

const AboutPage = () => (
  <div>
    <h1>About</h1>
    <p>Lots of stuff here</p>
    
    <Link to="/about/">About</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/blog/">Blog</Link>
    <Link to="/contact/">Contact</Link>
  </div>
)

export default AboutPage
