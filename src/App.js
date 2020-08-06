import React from 'react';
import Header from './components/common/header';
import Home from './components/Home';
import {Switch,Route} from 'react-router-dom';
import ICT from './components/pages/ict';

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './components/pages/about';

function App() {
  return (
    
      <div className="App">
            <Header/>
          
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/information-communication-technology" exact component={ICT} />
        </Switch>
        </div>
   
    
  );
}

export default App;
