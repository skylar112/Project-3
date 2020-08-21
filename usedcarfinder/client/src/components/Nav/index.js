import React from "react";
import firebase from 'firebase';

function Nav() {
  const [isSignedIn, setSignInStatus] = React.useState(false);

  React.useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setSignInStatus(true)
      } else {
        setSignInStatus(false);
      }
    })
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        React Car List
      </a>
      {isSignedIn ? (
        <a className="navbar-brand" href="#" onClick={() => firebase.auth().signOut()}>
          Logout
        </a>
      ) : (
        <a className="navbar-brand" href="/login">
          Login
        </a>
      )}
    </nav>
  );
}

export default Nav;
