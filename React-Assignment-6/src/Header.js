
import React from 'react';
export default class Header extends React.Component {
	constructor(props){
		super(props)
		this.state={
			data:'hello'
		}
	}

   render() {
   		console.log('Header render')
      return (
         <div>
          <h1>{this.props.prop1}</h1> 
         </div>
      );
   }
}

