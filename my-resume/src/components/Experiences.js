import React, { Component } from "react";

export default class Experiences extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <div className="card-content">
            <h6>
              <strong>EXPERIENCES</strong>
            </h6>
            <div className="row">
              <div className="col s12 m4 l4 xl4">
                <p className="teal year_exp white-text">
                  Jan <strong>2016</strong> - March <strong>2017</strong>
                </p>
              </div>
              <div className="col s12 m8 l8 xl8">
                <blockquote className="no-pad">
                  <h6 className="no-pad mt-bottom">
                    <strong>WEB DEVELOPER</strong>
                  </h6>
                  <p>
                    Lorem 
                  </p>
                </blockquote>
              </div>
            </div>
            <div className="row">
              <div className="col s12 m4 l4 xl4">
                <p className="teal year_exp white-text">
                  Jan <strong>2016</strong> - March <strong>2017</strong>
                </p>
              </div>
              <div className="col s12 m8 l8 xl8">
                <blockquote className="no-pad">
                  <h6 className="no-pad mt-bottom">
                    <strong>WEB DEVELOPER</strong>
                  </h6>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Amet, voluptas omnis totam, dolorum nihil, repellat expedita
                    labore ratione quibusdam itaque unde veniam neque iure
                    eveniet possimus fugit voluptatibus nam quisquam.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
