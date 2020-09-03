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
          <Modal isOpen={this.state.isModalOpen} style={customStyles}>
            <div class="modal-header">
              <h5>How to use our page</h5>
            </div>
            <div class="modal-body">
              <h7>React Cars</h7>
              <br></br>
              <h8>Welcome to React Cars, buying a car can be a difficult decision. Our goal is to help you decide how to buy a car. Finance or Lease? New or Used? How do I negotiate?
Please enjoy our interactive website.</h8>
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
