import React from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';
import Test from './Test';

class App extends React.Component {


  constructor() {
      super();
      this.state = {
         counter: 0,
       };
       this.increment=this.increment.bind(this);
         this.decrement=()=>this.setState({counter:this.state.counter-1});
   }
   increment(){
      let counter = this.state.counter
      this.setState({counter:counter+1})
   }
   render() {
      return (
         <div>
         <button onClick={this.increment}>Increment</button>
         <button onClick={this.decrement}>Decrement</button>
         <h1>counter: {this.state.counter}</h1>
         {this.state.data}
            <Header prop1 = "Welcome to Happay"></Header>
            <Content prop2="Sigma Tech Park"></Content>
            <Test prop3="Banglore"></Test>
         </div>
      );
    }  


  }     

export default App;