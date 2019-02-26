import React, { Component } from 'react';
// import { ReactComponent } from '*.svg';
import * as DataAction from "../action/dataAction";
import DataStore from '../store/dataStore';
export default class AppOne extends Component{
    constructor(){
        super()
        this.state={
            companyName:''
        }
        this._getDataStoreOne=this._getDataStoreOne.bind(this)
        DataStore.on('change',this._getDataStoreOne)
       
    }
    _getDataStoreOne(type){
        let temp1=DataStore._getDataOne();
        console.log("value of one",temp1)
        this.setState({companyName: temp1})
    }
    shouldComponentUpdate(nextProps, nextState){
       if(nextState.companyName === this.state.companyName){
           return false;
       }
       else{
           return true;
       }
    }
    componentWillUpdate(){
        console.log('componentWilUpdate')
    } 
    _clickOne(){
       DataAction.callActionOne();
    }
    
    render(){
        console.log('render in app1')
        return(
            <div>
                <button onClick={this._clickOne.bind(this)}>Buttonone</button>
                <h1>{this.state.companyName}</h1>
            </div>
            

            
        )
    }
}

