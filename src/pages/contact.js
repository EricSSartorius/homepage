import React from 'react'
import Link from 'gatsby-link'

const ContactPage = ({ data }) => (
  <div>
    <h1>Contact</h1>
    <p>Get at me</p>

    <Link to="/about/">About</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/blog/">Blog</Link>
    <Link to="/contact/">Contact</Link>
  </div>
)

export default ContactPage
