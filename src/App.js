import React from 'react';
import './App.css';

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import NavBar from "./components/NavBar";

import {Switch, Route}from 'react-router-dom';

function App() {
  return (
    <>
    <NavBar />
    <Switch>
      <Route exact path = "/" component={Home}/>
      <Route exact path = "/rooms" component={Rooms}/>
      <Route exact path = "/rooms/:slug" component={SingleRoom}/>
      <Route component={Error}/>
    </Switch>
    </>
  );
}

export default App;