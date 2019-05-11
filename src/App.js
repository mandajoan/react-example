import React from 'react';
import './App.css';
import NavBar from './components/navbar';
import Header from './components/header';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/home'
import Login from './pages/login'

function Auth(){
  //does google auth call
  return 'Amanda'
}

export function API(){
  //logic
  return console.log('example')
}

 function App() {
  return (
    <div className="App">
     <NavBar name={Auth()} />
     <BrowserRouter>
    
     <Route exact path="/" component={Login} />
     <Route exact path="/home" component={Home} />
    
     </BrowserRouter>
    </div>
  );
}

export default App;
