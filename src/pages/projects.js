import React from 'react'
import Link from 'gatsby-link'

const ProjectsPage = ({ data }) => (
  <div>
    <h1>Projects</h1>
    <p>Check my work</p>

    <Link to="/about/">About</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/blog/">Blog</Link>
    <Link to="/contact/">Contact</Link>
  </div>
)

export default ProjectsPage
