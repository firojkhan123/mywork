import React, { Component } from 'react';
// import { ReactComponent } from '*.svg';
import * as DataAction from "../action/dataAction";
import DataStore from '../store/dataStore';
export default class AppOne extends Component{
    constructor(){
        super()
        this.state={
            contactNumber:''
        }
        this._getDataStoreThree=this._getDataStoreThree.bind(this);
        DataStore.on('change',this._getDataStoreThree)
    }

    shouldComponentUpdate(nextprops, nextState){
        if(this.state.contactNumber == nextState.contactNumber){
            return false;
        }
        else{
            return true;
        }
    }
    _getDataStoreThree(type){
       
        let temp3=DataStore._getDataThree();
        console.log('value of three',temp3)
        this.setState({contactNumber: temp3})
    }

    _clickThree(){
       DataAction.callActionThree();
    }
    render(){
console.log('render in app3')
        return(
            <div>
                <button onClick={() => this._clickThree()}>Button Three</button>
             <h1>{this.state.contactNumber}</h1>
            </div>
        )
    }
}