import React, { Component } from 'react';
import ReactDOM from 'react';
import logo from './logo.svg';
import './App.css';

import Api from './api';
import api from './api';

class App extends Component {
  constructor(){
    super()
    this.state={
      term : '' ,
      sampleData: [],
       item:[]};
      // this.renderList = this.renderList.bind(this);
      // this.callData = this.callData.bind(this);
      
    }
    componentWillMount(){
      //   var f=(data)=>{
      //     this.setState({sampleData:JSON.parase(data)})
      //   }
      //   api(f);
      // }
    }
    handleCallBack = (data)=>{
      this.setState({sampleData:JSON.parse(data)})
    } 
    componentDidMount(){
      
      api(this.handleCallBack.bind(this));
    }
    onChangeFunction =(event)=>{
      this.setState({term: event.target.value});
    }
    // handleClick = () => {
    //   const  itemList  = this.state.item;
    //   itemList.push(this.state.term);
    //   this.setState({
    //     item: itemList,
    //     // term:''
    //   });
    // }

      renderList = function()  {
       
    //  return this.state.item.map((unit) => {
    //     return(
    //       <div>{unit}</div>
    //     )
    //   })
    }

    clearItem= ()=>{  
        this.setState({term: ''});
        this.refs.test.focus();
    }

    // callData = function(data){
    //   var f = (data)=>{
    //     this.setState({sampleData: JSON.parse(data)})
    //   }
    //   Api(f);
    // }

    // callApi=function(data){
    //   var t=function(data) {
    //     this.setState({tempData: data})
    //    }
    //   api(t);
    // }


    _handleSampleData = () => {
      const { sampleData } = this.state;
      return sampleData && sampleData.map((unit) => {
          console.log('unit', unit);
          return (
            <div style={{display:'flex', justifyContent: 'space-evenly', margin:'19px'}}>
                  <div>{unit.userId}</div>
                  <div>{unit.title}</div>
            </div>
          ) 
      });
    }
    render() {
      console.log('this.state.sampleData', this.state.sampleData)
      return (
        <div className="back-color">
          <button onClick={this.callData}>Fetch Data </button>
            <input value={this.state.term} onChange={(event) => this.setState({term: event.target.value})} />
            <button onClick={this.handleClick}>addItem </button>
            <button onClick={this.clearItem} ref="test">Clear</button>
            {/* <button onClick={this.callApi}>clickhere</button> */}
            {this.state.sampleData.length > 0 && this._handleSampleData()}
          </div>
          
      );
    }
  }
export default App;
