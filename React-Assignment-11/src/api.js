function api(a){
  
    var xhttp;
    xhttp=new XMLHttpRequest(); //creation of ajax object
  //  console.log(">>>>>>")
    console.log('value of ====',a)
    xhttp.onreadystatechange = () =>  {console.log("3")
      if (xhttp.readyState == 4 && xhttp.status == 200) {
          // console.log("2")
          // console.log('here',xhttp.responseText);
        a(xhttp.responseText);
        
      }
    }
    xhttp.open("GET",'https://jsonplaceholder.typicode.com/todos', true);
    xhttp.send();
}

export default api;  