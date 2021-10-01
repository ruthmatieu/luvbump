import React from "react";
import './App.css';
import { Switch, Route } from "react-router-dom";

import Homepage from "./pages/homepage/Homepage";

const Home = (props) => {
  console.log(props)
  return (
    <div>
      Homepage, Welcome!
    </div>
  )
}

function App() {
  return (
    <div>
      <Homepage/>

      <Switch>
        <Route exact path="/" compoment={Homepage}/>
        <Route exact path="/hats/:id"/>
        <Route/>
      </Switch>
    </div>
  );
}

export default App;
