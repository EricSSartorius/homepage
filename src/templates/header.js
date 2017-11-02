import React from "react"
import Link from 'gatsby-link'

class Header extends React.Component {
  constructor() {
    super()
    this.state = { open: false }
  }

  render() {
    return (
      <header className={window.location.pathname === "/" ? "light-menu" : ""}>
        <div className="header-top">
          <h1>
            <Link to="/">
              Eric Sartorius
            </Link>
          </h1>
          <div className={`wrapper-menu ${this.state.open ? "open" : ""}`} onClick={() => this.setState({ open: !this.state.open })}>
            <div class="line-menu half start"></div>
            <div class="line-menu"></div>
            <div class="line-menu half end"></div>
          </div>
        </div>
        <nav className={`${this.state.open ? "" : "closed"}`}>
          <ul>
            <li className="nav">
              <Link to="/about/" activeClassName="active" >About</Link>
            </li>
            <li className="nav">
              <a href="http://iamtheepic.com" target="_blank">Blog</a>
            </li>
            <li className="nav">
              <Link to="/contact/" activeClassName="active" >Contact</Link>
            </li>
            <li className="nav nav-work">
              <Link to="/work" activeClassName="active" >Work</Link>
            </li>
            <li className="sub-nav">
              <Link to="/work-dev" activeClassName="active" >
                Web Dev/Design</Link>
            </li>
            <li className="sub-nav">
              <Link to="/work-trans" activeClassName="active" >
                Translation/Subtitling</Link>
            </li>
            <li className="sub-nav">
              <Link to="/work-model" activeClassName="active" >
                Modeling</Link>
            </li>
            <li className="sub-nav sub-nav-movement">
              <Link to="/work-movement" activeClassName="active" >
                Movement Coaching</Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header