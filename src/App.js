import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import Employee from './employee'
import Topbar from './top'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Topbar />
        <BrowserRouter>
          <Route exact path = '/home' render= {() => <Employee/>}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
