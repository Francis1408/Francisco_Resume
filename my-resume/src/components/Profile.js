import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import ImgProfile from "../images/profile.png";
import { HashLink as Link } from "react-router-hash-link";
// import { socialMedias } from "../utils/socialMedia";


export default class Profile extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <div className="card-image">
            <img className="activator" src={ImgProfile} alt="Francisco Abreu" />
            <Link
              to="/"
              className="btn-floating halfway-fab waves-effect wave-light red"
            >
              <i className="material-icons activator">more_vert</i>
            </Link>
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
              Francisco Abreu
            </span>
            <p>Description</p>
          </div>
          <div
            className="card-reveal"
            style={{ padding: "0px", overflow: "hidden" }}
          >
            <div className="c-textFollow">
              <span className="card-title tex-white" id="text">
                Follow me
                <i className="material-icons right" style={{ margin: "0px" }}>
                  close
                </i>
              </span>
            </div>
            <div className="c-icons">
              <p className="flex-container">
                <a href="https://www.linkedin.com/in/francisco-abreu-gon%C3%A7alves-397693198/">
                <i className="fab fa-linkedin grey-text text-darken-4 social-style"></i>
                </a>
                <i className="fab fa-github grey-text text-darken-4 social-style"></i>
                <i className="fab fa-steam grey-text text-darken-4 social-style"></i>
                <i className="fab fa-instagram grey-text text-darken-4 social-style"></i>
                <i className="fab fa-pinterest grey-text text-darken-4 social-style"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
