import React from "react";
import firebase from "firebase";
import "./style.css";

function Nav({ setOpen }) {
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
        <h3>React Cars</h3>
      </a>

   
      <a className="navbar-brand text-light" href="#newCars">
        New Cars
      </a>

      <a className="navbar-brand text-light" href="#usedCars">
        Used Cars
      </a>
      

      {/* <a className="navbar-brand text-light" href="#about">
        About
      </a> */}

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
        <a
          className="navbar-brand  text-light"
          href="#login"
          onClick={() => setOpen(true)}
        >
          Login
        </a>
      )}
    </nav>
  );
}
export default Nav;
