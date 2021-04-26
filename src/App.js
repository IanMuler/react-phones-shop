import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import BrandPage from './pages/BrandPage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Cart from './pages/Cart';
import OrderConfirmed from './pages/OrderConfirmed';
import './assets/styles/App.css'

function App (){
  
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/All" component={BrandPage}/>
        <Route exact path="/Nokia" component={BrandPage}/>
        <Route exact path="/Samsung" component={BrandPage}/>
        <Route exact path="/Xiaomi" component={BrandPage}/>
        <Route path="/search" component={BrandPage}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/sign-up" component={SignUp}/>
        <Route exact path="/cart" component={Cart}/>
        <Route exact path="/order-confirmed" component={OrderConfirmed}/>
      </Switch>
    </HashRouter>
  );
}

export default App;
