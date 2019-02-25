import React, { Component } from 'react';
import B from './test2'
// import B from './test2';
export default class A extends Component{
    constructor(){
        super()
        this.onPropsRecive=this.onPropsRecive.bind(this)
    }
    onPropsRecive = ( data) => {
        this.props.parnetTemp(data)
    }
    render(){
        return(
            <div>
               {this.props.p}
               <B q={this.props.p}
               temp ={this.onPropsRecive}
               />
            </div>
        )
    }
}