import React, { Component } from "react";
import { Redirect } from "react-router-dom";
// import "./App.css";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Modal from 'react-modal';





firebase.initializeApp({
  apiKey: "AIzaSyCxiw5em0-MAHTE7v6JJvuXuXpSO7RLOnM",
  authDomain: "usedcarfinder2.firebaseapp.com",
});

class Login extends Component {
  state = { isSignedIn: false, isModalOpen: true };

  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user) => {
      this.props.setUser(user)
      this.setState({ isSignedIn: !!user });
      console.log("log in", user);


    });
  };

  render() {
    return (
      <div className="App">
        {this.state.isSignedIn ? (
          <Redirect to="/cars" />
        ) : (
          <div>
                    
            <Modal
              isOpen={this.state.isModalOpen}
              // onAfterOpen={afterOpenModal}
              // onRequestClose={closeModal}
              // style={customStyles}
              contentLabel="Example Modal"
            >
             <button onClick={()=> this.setState({isModalOpen:false}) }>CLOSE</button>
             
              <StyledFirebaseAuth
                uiConfig={this.uiConfig}
                firebaseAuth={firebase.auth()}
              />
            </Modal>
            </div>
          )}
      </div>
    );
  }
}

export default Login;
