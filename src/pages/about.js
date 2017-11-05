import React from 'react'
import Link from 'gatsby-link'

const AboutPage = ({ data }) => (
  <section className="about">
    <h1 className="title">About Me</h1>
    <p>Life is short and I want to see how much I can explore and learn before I die! If you are curious about how I have time to code, design, model, study languages, and workout all while traveling the world, check out my <a href="http://iamtheepic.com">travel blog.</a></p>
    <p>Looking for front-end development help on a project? Or perhaps a model for your brand? Need help with Japanese or Korean translations? Want to get away from the desk and looking for a movement coach? I have experience freelancing in all of these fields so feel free to <Link to="/contact/">shoot me a message</Link> so we can talk more about your needs!</p>
    <ul>
      <li className="work-item">
        <h3>Front-end Development And UI/UX Design</h3>
        <p>I have 3 years of experience with web development and design. 2 years of my experience is with the Angular framework(v 1.x) but most of my recent projects are done in React. Although I mostly do front-end programming, I also have experience creating mockups in Sketch and Figma.</p>
      </li>
      <li className="work-item">
        <h3>Japanese and Korean Translation/Subtitling</h3>
        <p>After studying abroad in Japan in 2004, I realized I had a passion for learning languages. I then went on to major in Japanese, live in Japan for 4 years, and then move to Korea for 6 years and learn Korean. During my time abroad, I had many opportunities to freelance translation, interpretation, and subtitling work. I also have experience in building multi-language websites as well.</p>
      </li>
      <li className="work-item">
        <h3>Modeling</h3>
        <p>I started modeling part-time in 2008. The majority of my work was product modeling at first but I later moved on to runway shows, event promotions, tv appearances, and extra work in movies.</p>
      </li>
      <li className="work-item">
        <h3>Movement Coaching</h3>
        <p>I am now well into my 30s yet never seemed to have outgrown my days at the playground. I have over 15 years experience in breakdancing, 5 years in calesthenic training, as well as  experience in capoeira, acrobatics, stunt work, pole dancing, boxing, brazillian jujitsu, tricking, gymnastics, and parkour. I would love to help anyone else that wants to test the limits of their body and move like they never have before.</p>
      </li>
    </ul>
  </section>
)

export default AboutPage
