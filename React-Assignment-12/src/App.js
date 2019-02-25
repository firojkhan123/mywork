import React, { Component } from 'react';
import './App.css';
import Test from './components/Toolbar';
import Background from './components/background'
// import './components/Toolbar.css';
 export default class App extends Component {
   constructor(){
     super()
     
   }
  render() {
    return (
      <div className="body">
       <Test/>
       <Background
      
       />
      
       </div>
    );
  }
}


