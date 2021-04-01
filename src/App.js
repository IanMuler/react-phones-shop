import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import BrandPage from './pages/BrandPage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App (){
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/All" component={BrandPage}/>
        <Route exact path="/Nokia" component={BrandPage}/>
        <Route exact path="/Samsung" component={BrandPage}/>
        <Route exact path="/Xiaomi" component={BrandPage}/>
        <Route path="/search" component={BrandPage}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/sign-up" component={SignUp}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
