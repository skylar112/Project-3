import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cars from "./pages/Cars";
import Login from "./pages/Login";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import "./App.css";
import Cards from "./components/cards";
import Footer from "./components/Footer";
function App() {
  let [user, setUser] = useState(false);
  return (
    <Router>
      {console.log("app", user)}
      <div>
        <Nav />
          <Route exact path={["/", "/login/"]}>
            <Login setUser={setUser} />
          </Route>
        <Jumbotron />
        <Switch>
          <Cards />
        </Switch>
        <Switch>
          <Route exact path={["/cars"]}>
            <Cars user={user} />
          </Route>
          <Route exact path="/cars/:id">
            <Detail />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
        
      </div>
      <Footer />
    </Router>
  );
}

export default App;
