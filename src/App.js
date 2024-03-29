import React from "react";
import { Switch, Route } from "react-router-dom";

import './App.css';

import HomePage from "./pages/homepage/Homepage";
import ShopPage from './pages/shop/shop.component';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" compoment={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route/>
      </Switch>
    </div>
  );
}

export default App;
