# Create React App

## How to create new React app.

### Available Scripts

####  'npx create-react-app my-app'
####  'cd my-app'
####  'start npm'



![ReactArchitecture](https://daveceddia.com/images/cra-1.0-initial-folder.png)


Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.



# Assignment-11

### How to make AJAX call ?

### AJAX:-

#### AJAX is not a programming language.

#### AJAX is a technique for accessing web servers from a web page.

#### AJAX stands for Asynchronous JavaScript And XML.




![Ajax](https://www.w3schools.com/xml/ajax.gif)








##### AJAX allows web pages to be updated asynchronously by exchanging data with a web server behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page.




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

##### As we know that componentDidMount it is the best place to integrate the api call.

### I used to React Life Cycle Which is most important part of Reactjs.

##### Each component has several “lifecycle methods” that you can override to run code at particular times in the process. You can use this lifecycle diagram as a cheat sheet. In the list below, commonly used lifecycle methods are marked as bold. The rest of them exist for relatively rare use cases.


![Ractlifecycle](https://cdn-images-1.medium.com/max/2000/1*sn-ftowp0_VVRbeUAFECMA.png)



##### we are going to fetch any data from an API then API call should be placed in this lifecycle method, and then we get the response, we can call the setState() method and render the element with updated data.


 1) Initialization
    2) Mounting
    3) Updation
    4) Unmounting

### ReactJS Component Mounting Methods.

##### These methods are called in the following order when an instance of a component is being created and inserted into the DOM:


- These methods are called when the component is being rendered for the first time.

- Whenever a component is rendered the first method called is “constructor”.

- In the constructor we can provide default/initial data for component state and props.


 ### componentWillMount:-

 ##### ComponentWillMount method will be called before component render to browser and also it is client side and as well server side rendering.

 ##### componentWillMount is called only once in the component lifecycle, immediately before the component is rendered. componentWillMount is largely considered problematic, and as of now, is being considered for deprecation. If your intention is to set an initial state for your component, it is preferable for you to do this in the constructor as shown above. If your intention is to set state using data from an async request, it is preferable that you do this in componentDidMount, as we will see below.


### Render:-

##### Render method you will see component on Browser and this method should be pure. You can not update state in this method.

For Example:

 const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));


#### componentDidMount:-

##### The componentDidMount() method runs after the component output has been rendered to the DOM. This is a good place to set the api.

![tocallapi](http://www.dnb.com.hk/portals/0/Images/summary/website-api-flow.png)


 componentDidMount(){

      api(this.handleCallBack.bind(this));
    }


### shouldComponentUpdate:-

#####  In this method you can check whether re-rendering the component is necessary or not. return false if you don’t want to re-render component.


![update](https://s3.amazonaws.com/images.seroundtable.com/google-updating-1371646685.gif)


shouldComponentUpdate(nextProps,nextState){

    if(nextState.value===3 || nextState.value===5 || nextState.value===7){
      return false;
    }
    console.log('shouldComponentUpdate');
    return true;
}


#### componentWillUpdate:-

##### This method will be called after shouldComponentUpdate(only if it returns true).And before rendering render method.

### Rerender:-

##### In this method updated component will be rendered to screen. with new data(or changes).

### componentDidUpadate:-

##### componentDidUpdate will be called after render method.44

- A simple example would be an app that collects input data from the user and then uses Ajax to upload said data to a database. 



export default class Task extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      name: "",
      age: "",
      country: ""
    };
  }

  componentDidUpdate() {
    this._commitAutoSave();
  }

  _changeName = (e) => {
    this.setState({name: e.target.value});
  }

  _changeAge = (e) => {
    this.setState({age: e.target.value});
  }

  _changeCountry = (e) => {
    this.setState({country: e.target.value});
  }

  _commitAutoSave = () => {
    Ajax.postJSON('/someAPI/json/autosave', {
      name: this.state.name,
      age: this.state.age,
      country: this.state.country
    });
  }

  render() {
    let {name, age, country} = this.state;
    return (
      ```<form>
        <input type="text" value={name} onChange={this._changeName} />
        <input type="text" value={age} onChange={this._changeAge} />
        <input type="text" value={country} onChange={this._changeCountry} />
      </form>```
    );
  }
}



- So whenever the component has a state change it will autosave the data. There are other ways to implement it too. The componentDidUpdate is particularly useful when an operation needs to happen after the DOM is updated and the update queue is emptied. It's probably most useful on complex renders and state or DOM changes or when you need something to be the absolutely last thing to be executed.



### componentWillUnMount:-

##### componentWillUnmount destroyed and removed from the DOM and only one lifecycle method is active.

##### We will tear down the timer in the componentWillUnmount


For Example:


class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);






For Example

componentDidMount(){
      api(this.handleCallBack.bind(this));
    }




### Learn Stateless component in this assignment i used Stateless component.



### Stateless Function Components:-

##### All function based components can be considered as stateless ReactJS components.


##### Stateless function components are also able to reference context if contextTypes is defined as a property of the function. The following code shows a Button component written as a stateless function component.


For Example:


import PropTypes from 'prop-types';

const Button = ({children}, context) =>
  <button style={{background: context.color}}>
    {children}
  </button>;

Button.contextTypes = {color: PropTypes.string};



![stateless component](https://cms-assets.tutsplus.com/uploads/users/1795/posts/29541/image/Stateful-vs-Stateless-Component-PropsvsState.jpg)



##### This is a functional component (called Greeting) written using ES6’s arrow function syntax that takes no props and returns an H1 tag with the text “Hello World today!”


 const Greeting = () => <h1>Hello World today!</h1>;



##### Stateless ReactJS Components are pure javascript functions so, we don’t need to have state.





##### Send http request by using xhttp object and get the response from server and processing by using map() method.

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

---->

const uint8 = new Uint8Array([25, 36, 49]);
const roots = uint8.map(Math.sqrt);

console.log(roots);




### I used css flex property in this assignment.

### flex:-
##### flex property sets the flexible length on flexible items.













