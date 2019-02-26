import React, { Component } from 'react';

// import * as Action from "./action/dataAction";
import AppOne from './components/appOne';
import AppTwo from './components/appTwo';
import AppThree from './components/appThree';
// import Store from './store/dataStore';
import './App.css';

class App extends Component {
  constructor(){
    super()
  }
  render() {
    return (
      <div className="App">
          <AppOne/>
          <AppTwo/>
          <AppThree/>
          <hr/>
      </div>
    );
  }
}

export default App;
