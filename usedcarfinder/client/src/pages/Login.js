import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
// import "./App.css";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

firebase.initializeApp({
  apiKey:"AIzaSyCxiw5em0-MAHTE7v6JJvuXuXpSO7RLOnM",
  authDomain: "usedcarfinder2.firebaseapp.com"
})

class Login extends Component {
  state={isSignedIn : false}

  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
     firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }



componentDidMount = () => {
  firebase.auth().onAuthStateChanged(user => {
    this.setState({ isSignedIn: !!user })
    console.log("user", user)
  })
}

  render() {
    return (
      <div className="App">
       {this.state.isSignedIn ? (
         <Redirect to="/" />
       ) :  (
        <StyledFirebaseAuth
        uiConfig={this.uiConfig}
        firebaseAuth={firebase.auth()}
      />
       )}
      </div>
    );
  }
}

export default Login;
