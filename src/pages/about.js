import React from 'react'
import Link from 'gatsby-link'

const AboutPage = ({ data }) => (
  <div className="about">
    <h1>About</h1>
    <p>Life is short and I want to see how much I can explore and learn before I die. If you are curious about how I have time to code, design, model, study languages, and workout all while traveling the world, check out my <a href="http://iamtheepic.com">travel blog.</a></p>
    <p>Looking for front-end development help on a project? Or perhaps a model for your brand? Need help with Japanese or Korean translations? Want to get away from the desk and looking for a movement coach? I have experience freelancing in all of these fields so feel free to <Link to="/contact/">shoot me a message</Link> so we can talk more about your needs!</p>

    <h2>Services</h2>
    <ul>
      <li>
        <h3>Front-end Development And UI/UX Design</h3>
        <p>I have 3 years experience with web development and design. I have 2 years experience with the Angular framework(v 1.x) but the past year I have decided to focus more on projects in React. In fact this website you are looking right now was made in React. Although I mostly do front-end programming, I also have experience creating mockups in Sketch (note: my workflow has recently changed to Figma). </p>
      </li>
      <li>
        <h3>Japanese and Korean Translation/Subtitling</h3>
        <p>After studying abroad in Japan in 2004, I realized I had a passion for learning languages and went on to major in Japanese, live in Japan for 4 years, and then move to Korea for 6 years and learn Korean. During my time abroad, I had many opportunities to freelance translation, interpretation, and subtitling work. I also have experience in building multi-language websites as well.</p>
      </li>
      <li>
        <h3>Modeling</h3>
        <p>I first started modeling part-time in 2008. At first, the majority of my work was product modeling but I also moved on to runway shows, event promotions, tv appearances, and extra work in movies.</p>
      </li>
      <li>
        <h3>Movement Coaching</h3>
        <p>I am now well into my 30s yet never seemed to have outgrown my days at the playground. I have over 15 years experience in breakdancing, 5 years in calesthenic training, as well as  experience in capoeira, acrobatics, stunt work, pole dancing, boxing, brazillian jujitsu, tricking, gymnastics, and parkour. After some inspiration from <a href="http://www.idoportal.com/">Ido Portal</a>, I decided to combine all of my disciplines under the umbrella of "movement" and enjoy finding new ways to challenge my body to move. I would love to help anyone else that wants to test the limits of their body and move like they never have before.</p>
      </li>
    </ul>
  </div>
)

export default AboutPage
