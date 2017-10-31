import React from 'react'
import Link from 'gatsby-link'

const AboutPage = ({ data }) => (
  <div className="about">
    <p>Life is short and I want to see how much I can explore and learn before I die. If you are curious about how I have time to code, design, model, study languages, and workout all while traveling the world, check out my <a href="http://iamtheepic.com">travel blog.</a></p>
    <p>Looking for front-end development help on a project? Or perhaps a model for your brand? Need help with Japanese or Korean translations? Want to get away from the desk and looking for a movement coach? I have experience freelancing in all of these fields so feel free to <Link to="/contact/">shoot me a message</Link> so we can talk more about your needs!</p>
  </div>
)

export default AboutPage
