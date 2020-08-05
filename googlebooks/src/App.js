import React from 'react';
import Nav from "./components/Nav/index"
import Jumbotron from "./components/Jumbotron/index"
import Search from "./pages/Search"
import Saved from "./pages/Saved"
import { BrowseRouter as Router, Route, Switch } from "react-router-dom"
import './App.css';




function App() {
  return (
    <div className="App">
      <Nav />
      <Jumbotron />
      <Router>
      <div>
        <Switch>
        <Route exact path="/" component={Search}/>
        <Route exact path="/saved" component={Saved}/>
        </Switch>
        </div>
        </Router>

    </div>
  );
}

export default App;
