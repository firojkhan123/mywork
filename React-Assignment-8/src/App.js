import React, { Component } from 'react';
import logo from './logo.svg';
import A from './test1'
import './App.css';
class App extends Component {
  constructor(){
    super()
    this.state={num:20}
    this.parnetTemp=this.parnetTemp.bind(this)
  }
  parnetTemp = (data) => {
    console.log('data-->', data);
    this.setState({
      num:10
    })
  }
  render() {
    return (
      <div>
      <A
      p={this.state.num}
      parnetTemp={this.parnetTemp}
      />
     
      </div>
    );
  }
}

export default App;
