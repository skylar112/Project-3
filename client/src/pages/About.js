import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "../App.css";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -100%)",
  },
};

class About extends Component {
  state = { isSignedIn: false, isModalOpen: true };
  render() {
    return (
      <div className="App">
        <div className="Modal">
          <Modal
            isOpen={this.state.isModalOpen}
            style={customStyles}
            id="about"
          >
            <div className="modal-header">
              <h5>How to use our page</h5>
            </div>
            <div className="modal-body ">
              <h1 className="text-dark text-center">React Cars</h1>
              <p className="text-dark">
                Welcome! React cars is an interactive site for the indecisive
                car buyer, the enthusiast and everything in between. Our goal is
                to provide resources and information for your car purchasing
                experience.
              </p>
            </div>
            <div class="modal-footer">
              <button
                className="btn btn-primary"
                onClick={() => this.setState({ isModalOpen: false })}
              >
                CLOSE
              </button>
            </div>
          </Modal>
        </div>
      </div>
    );
  }
}
export default About;
