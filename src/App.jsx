import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Setup from './pages/Setup';

function App() { 
  return (
    <Router>
      <main>
          <Switch>
            <Route exact path="/" component={Dashboard} />         
            <Route exact path="/login" component={Login} />
            <Route path="/setup" component={Setup} />         
          </Switch>
      </main>
    </Router>  
  )
}

export default App
