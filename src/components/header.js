import React from "react"
import Link from 'gatsby-link'
import PropTypes from 'prop-types'

class Header extends React.Component {
  constructor() {
    super()
    this.state = { 
      open: false
    }
  }

  render() {
    return (
      <header className={this.props.pathname}>
        <div className="header">
          <div className="header-top">
            <h1>
              <Link to="/">
                Eric Sartorius
              </Link>
            </h1>
            <div className={`wrapper-menu ${this.state.open ? "open" : ""}`} onClick={() => this.setState({ open: !this.state.open })}>
              <div className="line-menu half start"></div>
              <div className="line-menu"></div>
              <div className="line-menu half end"></div>
            </div>
          </div>
        </div>
        <nav onClick={() => this.setState({ open: false })} className={`${this.state.open ? "" : "closed"}`}>
          <ul>
            <li className="nav">
              <Link to="/about/" activeClassName="active" >About</Link>
            </li>
            <li className="nav">
              <Link to="/projects" activeClassName="active" >Projects</Link>
            </li>
            <li className="nav">
              <Link to="/contact/" activeClassName="active" >Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

Header.propTypes = {
  pathname: PropTypes.string,
}

export default Header