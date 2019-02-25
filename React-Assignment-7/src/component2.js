import React, { Component } from 'react';
export default class Test2 extends Component{
   
  fun2(){
      this.props.y();
  }
    render(){
        return(
           <button onClick={this.fun2.bind(this)}><h1>Decrement</h1></button>
        )
    }
}