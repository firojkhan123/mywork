import React, { Component } from 'react';
import Test from './sample'
import './App.css';
import TodoApp from './todo';
class App extends Component {
  constructor(){
    super()
    this.state={
       Name:'Hello world'
    }
    this.onGeeks = this.onGeeks.bind(this)
  }
  onGeeks(xyz){
    alert(xyz)
}
  render() {
    return (
      <div className="App">
        <Test
          x={this.state.Name} 
          temp={this.onGeeks}
        />
     
      </div>
    
    );
  }
}

export default App;
