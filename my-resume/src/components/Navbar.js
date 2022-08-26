import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="light-blue darken-4">
          <div className="container">
            <div className="nav-wrapper">
              <Link to="/" className="brand-logo">
                CV
              </Link>
              <Link to="/" data-target="side-nav" className="sidenav-trigger">
                <i className="material-icons">menu</i>
              </Link>
              <ul className="right hide-on-med-and-down">
                <li>
                  <Link to="/skills">
                    <i className="fas fa-copy"></i> Skills
                  </Link>
                </li>
                <li>
                  <Link to="/experiences">
                    <i className="fas fa-id-badge"></i> Experiences
                  </Link>
                </li>
                <li>
                  <Link to="/educations">
                    <i className="fas fa-graduation-cap"></i> Education
                  </Link>
                </li>
                <li>
                  <Link to="/portifolios">
                    <i className="fas fa-address-card"></i> Portifolios
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <ul className="sidenav" id="side-nav">
            <li>
              <Link to="/skills">
                <i className="fas fa-copy"></i> Skills
              </Link>
            </li>
            <li>
              <Link to="/experiences">
                <i className="fas fa-id-badge"></i> Experiences
              </Link>
            </li>
            <li>
              <Link to="/educations">
                <i className="fas fa-graduation-cap"></i> Education
              </Link>
            </li>
            <li>
              <Link to="/portifolios">
                <i className="fas fa-address-card"></i> Portifolios
              </Link>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}
