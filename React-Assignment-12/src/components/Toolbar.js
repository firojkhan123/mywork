import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { blue } from '@material-ui/core/colors';
class Test extends React.Component {
    state = {
      value: 0,
    };
    handleChange = (event, value) => {
      this.setState({ value });
    };
    render() {
      const { classes } = this.props;
      return (
         <div> 
        <Paper style={{backgroundColor:'#135390'}}>
        {/* <span class="mdl-layout-title"><img src={require("../images/lo.png")}/></span> */}
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="secondary"
            textColor="primary"
            
          
          >
            
            <Tab style={{color:'white',fontWeight:'600'}} label="FLIGHTS" />
            <Tab style={{color:'white',fontWeight:'600'}} label="HOTELS" />
            <Tab style={{color:'white',fontWeight:'600'}} label="MYBOOKING" />
            <Tab style={{color:'white',fontWeight:'600'}} label="OFFERS" />
            
          </Tabs>
        </Paper>
        </div>
      );
    }
  }
  export default Test