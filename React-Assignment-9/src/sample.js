import React, { Component } from 'react';
import App from './'
export default class Test extends Component{
   constructor(){
    super()
    this.state={
      Lastname:'Welcome to Happay'
    }
  }
  _click(xyz){
    console.log('jitender',xyz)
    this.props.temp(xyz);
  }
  render() {
    return (
      <div className="App">
        {this.props.x}
        <button onClick={this._click.bind(this,this.state.Lastname)}>onClick</button>
      </div>
    );
  }
}
