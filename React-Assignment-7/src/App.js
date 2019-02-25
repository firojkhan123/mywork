import React, { Component } from 'react';
import logo from './logo.svg';
import Test1 from './component1'
import Test2 from './component2'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state= {
      counter: 0
    }
  }
  myfunction1(type){
    this.setState({
      counter: this.state.counter+1
    })
  }
  myfunction2(type){
    this.setState({
      counter: this.state.counter-1
    })
  }
  render() {
    return (
      <div className="App">
      <h1>  counter: {this.state.counter}</h1>
    
      <br/><br/><br/><hr/>
      <Test1
       x={() =>this.myfunction1()}
      />  
      <Test2
        y={() => this.myfunction2()}
      />
      

      </div>
    );
  }
}

export default App;
