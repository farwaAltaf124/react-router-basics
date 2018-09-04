import React, { Component } from 'react';
import {
  BrowserRouter as Router ,
  Route,
  Switch
} from 'react-router-dom';

import About from './component/about';
import Contact from './component/contact';
import Home from './component/home';
import Header from './component/header';
import Error from './component/error';

class App extends Component {
  render() {
    return (
    <Router>
    
      <div >
      <Header/>
      <Switch>
      
      <Route exact path='/' component={Home}/>
      
      <Route path='/about' component={About}/>
      <Route path='/contact' component={Contact}/>
      <Route   component={Error}/>
  
               
     
    
      </Switch>

      </div>   
     
      </Router>
   );
  }
}

export default App;
