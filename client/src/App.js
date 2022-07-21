import React from "react";
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import {withRouter} from 'react-router'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import "./App.css";
import Navbar from './components/Navbar';
import LoginForm from './components/login';
import Home from './components/pages/Home';
import Students from './components/pages/Students';
import Support from './components/pages/Support';
import Edit from "./components/pages/edit";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




function App() {
  
  return (
 
      <Router>
      <Switch>
      
          
          <Route exact path="/login" component = {LoginForm}/>
         

       
    <div>
        <Navbar />
  
          <Route path='/home' exact component={Home} />
          <Route path='/students' component={Students} />
          <Route  path="/students/edit/:id" component = {Edit}/>
          <Route path='/support' component={Support} />
           </div>
        </Switch>
       
      </Router>
    




    
  );
}

export default App;
