import React from "react";
import { Link } from 'react-router-dom';
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
      <Link className="navbar-brand text-light" to="/about">
        About
      </Link>

      <h3>React Cars</h3>

      <a className="navbar-brand text-light" href="#video">
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
        <a className="navbar-brand  text-light" href="#login">
          Login
        </a>
      )}
    </nav>
  );
}
export default Nav;