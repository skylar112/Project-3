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
            // onAfterOpen={afterOpenModal}
            // onRequestClose={closeModal}
            style={customStyles}
            // contentLabel="Example Modal"
          >
            <div class="modal-header">
              <h5>How to use our page</h5>
            </div>

            <div class="modal-body">
              <h2>React Cars</h2>
              <p>Welcome to React Cars where you can save your favorite cars with information when looking to buy a car.</p>
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
