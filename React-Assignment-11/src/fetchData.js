
 function api(callBack){
     var xhttp;
     xhttp=new XMLHttpRequest(); //creation of ajax object
     import React from 'react';
     xhttp.onreadystatechange = () =>  {
       if (xhttp.readyState == 4 && xhttp.status == 200) {
         callBack(xhttp.responseText);
        
       }
     }
     xhttp.open("GET",'https://jsonplaceholder.typicode.com/todos', true);
     xhttp.send();
 }

 export default api;
//  export default  cofetchUsers = () => {
//   // Where we're fetching data from
//   fetch(`https://jsonplaceholder.typicode.com/users`)
//     // We get the API response and receive data in JSON format...
//     .then(response => response.json())
//     // ...then we update the users state
//     .then(data =>
//       this.setState({
//         users: data,
//         isLoading: false,
//       })
//     )
  
//     // Catch any errors we hit and update the app
//     .catch(error => this.setState({ error, isLoading: false }));
// }
// export default class FetchUsers extends React.Component{
   
// }
// let data =[];
// const _fetchUsers = () => {
//   // Where we're fetching data from
//   fetch(`https://jsonplaceholder.typicode.com/users`)
//     // We get the API response and receive data in JSON format...
//     .then(response => response.json())
//     // ...then we update the users state
//     .then( data = data1 => data1 )
//     // console.log('data --->', data)
//     // Catch any errors we hit and update the app
//     .catch(error => this.setState({ error, isLoading: false }));
// }

// export  function loadDoc() {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       console.log('this.responseText', JSON.parse(this.responseText))
//        return JSON.parse(this.responseText);
//     }
//   };
//   xhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);

//   xhttp.send();
//   // return data;
// }

// var  data = null;

// function _loadDoc() {
//       var xhttp = new XMLHttpRequest();
//         xhttp.onreadystatechange = function() {
//           let data = null;
//           if (this.readyState == 4 && this.status == 200) {
//             // console.log('this.responseText', JSON.parse(this.responseText))
//             data = JSON.parse(this.responseText);
//             return data
//           }
//         };
//         xhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);

//         xhttp.send();
//   // return data;
// }

// function _getData() {

//     return data;
// }

// export {_loadDoc, _getData};
