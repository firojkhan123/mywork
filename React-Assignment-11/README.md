# Create React App

## How to create new React app.

### Available Scripts

####  'npx create-react-app my-app'
####  'cd my-app'
####  'start npm'

# Assignment-11

### How to make AJAX call ?

### AJAX:-

#### AJAX is not a programming language.

#### AJAX is a technique for accessing web servers from a web page.

#### AJAX stands for Asynchronous JavaScript And XML.

#### AJAX allows web pages to be updated asynchronously by exchanging data with a web server behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page.


For Example:

function api(a){
    var xhttp;
    xhttp=new XMLHttpRequest(); //creation of ajax object
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

### I used to React Life cycle and callback.

### componentDidMount:-

#### As we know that componentDidMount it is the best place to integrate the api call.

##### we are going to fetch any data from an API then API call should be placed in this lifecycle method, and then we get the response, we can call the setState() method and render the element with updated data.

For Example

componentDidMount(){
      api(this.handleCallBack.bind(this));
    }



#### Send http request by using xhttp object and get the response from server and processing by using map() method.

#### map() will help to iterate data from the api.

### map() method:-

##### creates a new array with the results of calling a provided function on every element in the calling array.

For Example:

var arr1=['A','B','C','D','E','F']

arr1.map((e)=>{return console.log(e)})
output:
A
B
C
D
E
F


### I used css flex property in this assignment.

### flex:-
#### flex property sets the flexible length on flexible items.













