import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from "./components/Navbar.js";
import Home from "./pages/Home.js"
import Services from "./pages/Services.js"
import Products from "./pages/Products.js"
import SignUp from "./pages/SignUp.js"
import "./App.css"

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </Router>
    </React.Fragment>
  )
}

export default App;