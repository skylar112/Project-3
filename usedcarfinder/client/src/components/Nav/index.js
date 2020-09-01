import React from "react";
import firebase from "firebase";
import "./style.css";

function Nav() {
  const [isSignedIn, setSignInStatus] = React.useState(false);
  React.useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setSignInStatus(true);
      } else {
        setSignInStatus(false);
      }
    });
  }, []);
  return (
    <nav className="navbar navbar-light bg-dark">
      <a className="navbar-brand text-light" href="/">
        <img src=".../images/logo.png" alt=""></img>
        Home
      </a>
      <a className="navbar-brand text-light" href="/about">
        About
      </a>

      <h3>React Cars</h3>

      <a className="navbar-brand text-light" href="/">
        Videos
      </a>

      {isSignedIn ? (
        <a
          className="navbar-brand text-light"
          href="#"
          onClick={() => firebase.auth().signOut()}
        >
          Logout
        </a>
      ) : (
        <a className="navbar-brand  text-light" href="/login">
          Login
        </a>
      )}
    </nav>
  );
}
export default Nav;