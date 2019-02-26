import React, { Component } from 'react';
// import { ReactComponent } from '*.svg';
import * as DataAction from "../action/dataAction";
import DataStore from '../store/dataStore';
export default class AppTwo extends Component{
    constructor(){
        super()
        this.state={
            location:''
        }
        this._getDataStoreTwo=this._getDataStoreTwo.bind(this)
        DataStore.on('change',this._getDataStoreTwo)
        
    }
    _getDataStoreTwo(type){
        
        let temp2=DataStore._getDataTwo();
        console.log('value of two', temp2)
        this.setState({location: temp2})
    }

    shouldComponentUpdate(nextprops, nextState){
        if(this.state.location == nextState.location){
            return false;
        }
        else{
            return true;
        }
    }
   
    _clickTwo(){
          DataAction.callActionTwo();
        }
     
    render(){
        console.log('render in app2')
        return(
            <div>
                <button onClick={this._clickTwo.bind(this)}>Button Two</button>
                <h1>{this.state.location}</h1>
            </div>
            
        )
    }
}