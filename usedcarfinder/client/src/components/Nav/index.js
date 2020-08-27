import React from "react";
import firebase from "firebase";


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
      <a className="navbar-brand text-dark" href="#">
        
        
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
