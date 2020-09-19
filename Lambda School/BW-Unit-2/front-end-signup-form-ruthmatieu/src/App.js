import React from 'react';
import './App.css';
import Signup from './component/Signup';
import Login from './component/Login'
// import your fontawesome library
import './component/fontawesome';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Login}/>
      <Route path="/sign-up" component={Signup}/>
    </div>
  );
}

export default App;
