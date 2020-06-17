import React, { Component } from "react";
import Nav from "./components/Nav/Nav";
import Cover from "./components/Cover/Cover";
import Grid from "./components/Grid/Grid";
import SignIn from "./components/SignIn/SignIn";
import Register from "./components/Register/Register";
import Footer from "./components/Footer/Footer";

import Series from "./components/Series/Series";
import Animations from "./components/Animations/Animations";
import Movies from "./components/Movies/Movies";
import MarvelDC from "./components/MarvelDC/MarvelDC";
import Games from "./components/Games/Games";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav isSignedIn={true} onRouteChange={true} />
          <Switch>
            <Route path="/" exact component={Cover} />
            <Route path="/home" exact component={Cover} />
            <Route path="/categories" exact component={Grid} />
            <Route path="/signin" exact component={SignIn} />
            <Route path="/register" exact component={Register} />

            <Route path="/categories/series" exact component={Series} />
            <Route path="/categories/animations" exact component={Animations} />
            <Route path="/categories/movies" exact component={Movies} />
            <Route path="/categories/marveldc" exact component={MarvelDC} />
            <Route path="/categories/games" exact component={Games} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
