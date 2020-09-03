import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cars from "./pages/Cars";
import LoginContextProvider, { LoginContext } from './utils/LoginContext';
import Login from "./pages/Login";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import "./App.css";
import Cards from "./components/cards";
import Footer from "./components/Footer";
import Videos from "./components/Videos";
import Newcars from "./components/Newcars";
import About from "./pages/About";
import { Container } from "reactstrap";

function App() {
  let [user, setUser] = useState(false);
  return (
    <LoginContextProvider>
    <Router>
      {console.log("app", user)}

      <LoginContext.Consumer>
        {({ open, setOpen }) => (
           <>
           <Nav setOpen={setOpen} />
           <Route exact path={["/", "/login/"]}>
             <Login open={open} setUser={setUser} setOpen={setOpen} />
           </Route>
         </>
        )}
      </LoginContext.Consumer>
      <Jumbotron />
      <Container>
        <div className="col-12">
          <Switch>
            <Newcars />
          </Switch>

          <Switch>
            <Cards />
          </Switch>

          <Switch>
            <Videos />
          </Switch>

          <Switch>
            <Route exact path={["/cars"]}>
              <Cars user={user} />
            </Route>
            <Route exact path="/cars/:id">
              <Detail />
            </Route>
            <About />
            <Route>
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </Container>

      <Footer />
    </Router>
    </LoginContextProvider>
  );
}

export default App;
