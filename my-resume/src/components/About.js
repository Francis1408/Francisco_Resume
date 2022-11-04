import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <div className="card-content">
            <h6 className="mt-bottom">
              <strong>ABOUT ME</strong>
            </h6>
            <p className="grey-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              tempora natus quae aliquid aperiam fuga amet ipsam laboriosam
              voluptate, dolorum, saepe itaque perspiciatis consequuntur.
              Recusandae ipsam eum tempora quibusdam nobis.
            </p>
          </div>
          <div className="card-action">
            <h6>
              <strong>PERSONAL INFO</strong>
            </h6>
            <div className="row mt">
              <div className="col s12 m6 l6 xl6"></div>
              <p>
                <strong>Address: </strong>123 Lorem
              </p>
              <p>
                <strong>Email: </strong>teste@yahoo.com
              </p>
              <p>
                <strong>Phone: </strong>123 456 789
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
