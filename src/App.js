import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import PostDetails from './components/PostDetails'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route path="/:id" component={PostDetails} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
