import React, { Component } from 'react';
export default class Test1 extends Component{
  
  fun1(){
      this.props.x();
  }
    render(){
     
        return(
           <button onClick={this.fun1.bind(this)}><h1>Increment</h1></button>
        )
    }
}