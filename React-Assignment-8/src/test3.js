import React, { Component } from 'react'
export default class C extends Component{
    constructor(){
        super()
        this.state={temp2:10}
    }
   _click(x){

        this.props.temp1(x);
       
   }
    render() {
        return(
            <div>
                {this.props.r}
                <button onClick={this._click.bind(this,this.state.temp2)}>onclick</button>
            </div>
        )
    }
}