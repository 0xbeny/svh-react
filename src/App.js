import React,{useEffect} from "react";
import Header from "./components/common/header";
import Home from "./components/pages/Home";
import { Switch, Route, Redirect } from "react-router-dom";
import ICT from "./components/pages/ict";
import "animate.css/animate.min.css";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import  ScrollAnimation from 'react-animate-on-scroll';
import About from './components/pages/about';


function App() {
  return (
    <div className="App">
      <Header />
      
      <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/ict" component={ICT} />
        
        <Route path="/about" component={About} />

        <Redirect from="/" exact to="/home" />
        <Redirect to="/404"  />
      </Switch>
      <div
        className="container-fluid svh-info text-center text-light shadow p-2 animate__animated animate__slideInUp"
        dir="rtl"
        style={{zIndex:"100" }}
      >
    
        1399 © تمامی حقوق برای شرکت سامانه ورز هزاره محفوظ است. 
        
      </div>
    </div>
  );
}

export default App;
