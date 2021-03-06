import React  from 'react';
import './App.css';
import  Nav from './Nav';
import About from './About';
import Home from './Home';

// var Switch = require("react-router-dom").Switch;
// var Router = require("react-router-dom").Router;
// var Route = require("react-router-dom").Route;
// var Link = require("react-router-dom").LInk;

import {HashRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { Component } from 'react';

function App() {

  
  return (
    <Router>  
      <div className="App">
        <Nav/>
          <Switch>
            <Route path="/home" exact component={Home} />
            <Route path="/about"  component={About} />
            <Route path="/about/id"  component={About} />
          </Switch>
     </div>
   </Router>
  );
}

export default App;