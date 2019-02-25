import React, { Component } from 'react'
import C from './test3'
export default class B extends Component{
    constructor(){
        super()
        this.onGeek=this.onGeek.bind(this)
    } 
    onGeek(z){
        this.props.temp(z);
        console.log('value',z)
    }
    render(){
        return(
            <div>
                {this.props.q}
                <C r={this.props.q} 
                temp1={this.onGeek}
                />
               
            </div>
        )
    }
}