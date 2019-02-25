import React from 'react';
class Content extends React.Component {

constructor(props) {
      super(props);
      this.state = {
        name: 'Hello'
      }
   }

   render() {
   	console.log('content render')
      return (
         <div>
            <h3>{this.props.prop2}</h3>
         </div>
      );
   }
   
}

export default Content;