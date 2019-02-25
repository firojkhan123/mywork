import React, { Component } from 'react';   
import './App.css';

class App extends Component {
  constructor(props){
    super(props); 
    this.state={
        mode: undefined,
        value: 0,
        date: new Date()
    }
    console.log('constructor');
}

componentWillMount(){
  console.log('componentWillMount')
  // let mode;
  // if (this.props.age > 70) {
  //   mode = 'old';
  // } else if (this.props.age < 18) {
  //   mode = 'young';
  // } else {
  //   mode = 'middle';
  // }
  // this.setState({ mode });
}
componentDidMount(){
    console.log('componentDidMount');

    this.timerID = setInterval(
      () => this.tick(),
      5000
    );
}
componentWillUnmount() {
  console.log("componentWillUnmount")
  clearInterval(this.timerID);
}

tick() {
  this.setState({
    date: new Date()
  });
}
componentWillReceiveProps(nextProps){
  console.log('componentWillReceiveProps')

}
changeSomething = (ev)=>{
    this.setState({
        value: this.state.value+1    
    })
}
shouldComponentUpdate(nextProps,nextState){
  
    if(nextState.value===3 || nextState.value===5 || nextState.value===7){
      return false;  
    }
    console.log('shouldComponentUpdate');
    return true;
}
componentWillUpdate(nextProps,nextState){
  console.log('componentWillUpdate',nextProps,nextState)
}
componentDidUpdate(prevProps,prevState){
  console.log('componentDidUpdate',prevState.value,this.state.value)
}

  render() {
    console.log("Render called");
    return (
      <div className="App">
      <h1>Value: {this.state.value}</h1>
      <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      <button onClick={this.changeSomething.bind(this)}>onClick</button>
      { this.props.name } (age: { this.props.age })
      </div>
    );
  }
}

export default App;
