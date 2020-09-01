import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "../App.css";
import Modal from "react-modal";

class About extends Component {
  state = { isSignedIn: false, isModalOpen: true };

  render() {
    return (
      <div className="App">
        <div className="Modal">
          <Modal isOpen={this.state.isModalOpen}>
            <div class="modal-header">
              <h5>How to use our page</h5>
            </div>

            <div class="modal-body">
              <p>hello world</p>
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
