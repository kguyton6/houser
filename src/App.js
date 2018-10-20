import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Wizard from './components/wizard/Wizard'
import Home from './components/home/Home'
import Dashboard from './components/dashboard/Dashboard'
import Register from './components/register/Register'
import Step2 from './components/wizard/steps/Step2'
import Step3 from './components/wizard/steps/Step3'
import Step4 from './components/wizard/steps/Step4'
import Step5 from './components/wizard/steps/Step5'


class App extends Component {
  
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path='/home' component={Home} />
            <Route exact path='/register' component={Register} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/step/1' component={Wizard}/>
            <Route path='/step/2' component={Step2}/>
            <Route path='/step/3' component={Step3}/>
            <Route path='/step/4' component={Step4}/>
            <Route path='/step/5' component={Step5}/>
            <Route path='/step/dashboard' component={Dashboard}/>
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
