
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Header from './components/Header';
import Home from './components/Homes';
import Makeup from './components/Makeups';
import Mens from './components/Mens';
import Womens from './components/Womens';







 class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  render(){
    return (
      <div>
        <Header />
        <Router> 
      <div>
       <ul>
        <li>
           <Link to="/homes">Home Inventory</Link>
           </li>
           <li>
             <Link to="/makeups">Makeup Inventory</Link>
           </li>
          <li>
             <Link to="/mens">Mens Inventory</Link>
           </li>
           <li>
             <Link to="/womens">Womens Inventory</Link>
          </li>
          </ul>
           <Switch>
           <Route path="/homes">
             <Home />
           </Route>
           <Route path="/makeups">
             <Makeup />
           </Route>
           <Route path="/mens">
             <Mens />
           </Route>
           <Route path="/womens">
             <Womens />
           </Route>
          </Switch>
          </div>
          </Router>
          </div>
);
  }
}
export default App;
