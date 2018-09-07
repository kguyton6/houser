import React, { Component } from 'react';
import './App.css';
// import Dashboard from './components/Dashboard/Dashboard'
// import Wizard from './components/Wizard/Wizard'
import Header from './components/Header/Header'
import routes from './routes.js'
import { HashRouter, Route, Link } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <HashRouter>
      <div className="App">
{/*       
         <Link to path='/' component= {Dashboard}/>
         <Link to path='/wizard' component={Wizard} /> */}

         
       <Header />
     
       

       
       { routes }
      </div>
      </HashRouter>
    );
  }
}

export default App;
