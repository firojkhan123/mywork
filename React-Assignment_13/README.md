# Create React App

## How to create new React app.

### Available Scripts

####  'npx create-react-app my-app'
####  'cd my-app'
####  'start npm'


![ReactArchitecture](https://daveceddia.com/images/cra-1.0-initial-folder.png)


Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


# Assignment-13

### Flux and React Life Cycle


### In this assignment i used flux and React life cycle.

### What is flux ?

##### Flux is an architecture It is not a framework or a library. It is simply a new kind of architecture that complements React and the concept of Unidirectional Data Flow.





![flux](https://cdn-images-1.medium.com/max/1600/1*7qtRmuWoMmFyhpnyxoS3MA.png)




##### That said, Facebook does provide a repo that includes a Dispatcher library. The dispatcher is a sort of global pub/sub handler that broadcasts payloads to registered callbacks.

##### A typical Flux architecture will leverage this Dispatcher library, along with NodeJS's EventEmitter module in order to set up an event system that helps manage an applications state.


### Flux component:-

- Actions - Helper methods that facilitate passing data to the dispatcher.

- Dispatcher - Receives actions and broadcasts payloads to registered callbacks.

- Stores - Containers for application state & logic that have callbacks registered to the dispatcher.

- Controller Views - React Components that grab the state from Stores and pass it down via props to child components.

### Dispatcher:-

##### The Dispatcher is basically the manager of this entire process. It is the central hub for your application. The dispatcher receives actions and dispatches the actions and data to registered callbacks.


For Example:

var Dispatcher = require('flux').Dispatcher;
var AppDispatcher = new Dispatcher();

AppDispatcher.handleViewAction = function(action) {
  this.dispatch({
    source: 'VIEW_ACTION',
    action: action
  });
}

module.exports = AppDispatcher;



In the above example, we create an instance of our Dispatcher and create a handleViewAction method. This abstraction is helpful if you are looking to distinguish between view triggered actions v.s. server/API triggered actions.


### Store:-

##### In Flux, Stores manage application state for a particular domain within your application. From a high level, this basically means that per app section, stores manage the data, data retrieval methods and dispatcher callbacks.

### EventEmitter :-

##### This allows our stores to listen/broadcast events. This allows our Views/Components to update based upon those events. Because our Controller View listens to our Stores, leveraging this to emit change events will let our Controller View know that our application state has changed and its time to retrieve the state to keep things fresh.


##### I created four component App, AppOne, AppTwo, and Appthree, How to get data from store for each components and render to the App component.

### And also create folder action, utils, dispatcher, and store. 

### First of all click button fire _clickOne function.

# Component--> DataAction--> utils--> dispatcher--> store


For Example:

  <button onClick={this._clickOne.bind(this  >Buttonone</button>
      constructor(){
        super()
        this.state={
            companyName:''
        }
        this._getDataStoreOne=this._getDataStoreOne.bind(this)
        DataStore.on('change',this._getDataStoreOne)
    }

    _clickOne(){
       DataAction.callActionOne();
    }
    export function callActionOne(){
    Utils._getDataOne();
    }

    const Utils = {
    _getDataOne : function() {
        dispatcher.dispatch({type:'company'
            ,response:'Happay'})   
    }

        const temp=new Datastore;
        dispatcher.register(temp._handleAction.bind(temp))
        export default temp;


            _handleAction(action){
        switch(action.type){
            case "company" : {
                this._setDataOne(action.response);
                break
            }

        }

    _setDataOne(data){
        this.dataOne=data;
        this.emit('change')
    }
    _getDataOne(){
        return  this.dataOne
    }

 ### Whenever we are click button only one component so every component listen.
 # how to stop ?
 #####  So in this situtation we can use shoudComponentUpdate to stop other component listening.


 For Example:

       shouldComponentUpdate(nextProps, nextState){
       if(nextState.companyName === this.state.companyName){
           return false;
       }
       else{
           return true;
       }
   }



### I used React life cycle in this assignment:


##### Each component has several “lifecycle methods” that you can override to run code at particular times in the process. You can use this lifecycle diagram as a cheat sheet. In the list below, commonly used lifecycle methods are marked as bold. The rest of them exist for relatively rare use cases.


![Ractlifecycle](https://cdn-images-1.medium.com/max/2000/1*sn-ftowp0_VVRbeUAFECMA.png)


 1) Initialization
    2) Mounting
    3) Updation
    4) Unmounting



# ReactJS Component Mounting Methods.

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


### componentDidMount:-

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
      <form>
        <input type="text" value={name} onChange={this._changeName} />
        <input type="text" value={age} onChange={this._changeAge} />
        <input type="text" value={country} onChange={this._changeCountry} />
      </form>
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
      ```<div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>```
    );
  }
}

ReactDOM.render(
 ``` <Clock />```,
  document.getElementById('root')
);









