

# Create React App

## How to create new React app.

### Available Scripts

####  'npx create-react-app my-app'
####  'cd my-app'
####  'start npm'



![ReactArchitecture](https://daveceddia.com/images/cra-1.0-initial-folder.png)





Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.



# Assignment- 6
 

### What is React ?


##### React is a JavaScript library for building user interfaces.


##### ReactJS is component based. We devide the complex UI into basic components. After developing the basic components we again adds all these components to create a complex UI which also called as complex component. React controls the data flow in the components with state and props. The data in states and props are used to render the Component with dynamic data.



### constructor() :-


##### If you don’t initialize state and you don’t bind methods, you don’t need to implement a constructor for your React component.

##### The constructor for a React component is called before it is mounted. When implementing the constructor for a React.Component subclass, you should call super(props) before any other statement. Otherwise, this.props will be undefined in the constructor, which can lead to bugs.


#### Typically, in React constructors are only used for two purposes

- Initializing local state by assigning an object to this.state.

- Binding event handler methods to an instance.


##### You should not call setState() in the constructor(). Instead, if your component needs to use local state, assign the initial state to this.state directly in the constructor



For Example:


constructor(props) {
  super(props);
  this.state = { counter: 0 };
  this.handleClick = this.handleClick.bind(this);
}




### Understanding ReactJS State


##### State is like a data store to the ReactJS component. It is mostly used to update the component when user performed some action like clicking button, typing some text, pressing some key, etc.


##### React.Component is the base class for all class based ReactJS components. Whenever a class inherits the class React.Component it’s constructor will automatically assigns attribute state to the class with intial value is set to null. we can change it by overriding the method constructor.


##### In many cases we need to update the state. To do that we have to use the method setState and directly assigning like this.state.


### setState():-

##### we need to change our components  state. So, how do we update the state of our component? React components have a method available to them called setState Calling this.setState causes React to re-render your application and update the DOM.

- Normally, when we want to update our component we just call setState with a new value by passing in an object to the setState function: 

For Example:

      
      this.setState({data:'Welcome to Happay'})


 #### Then, when the user clicks the submit button, I call this function:



      submit(){
      this.setState({showForm : 'Once Again Welcome to Happay'});
}     



### What is Prop ?

##### As we know that In ReactJS we use props to send data to components.

##### In ReactJS every component is treated as a pure javascript function.

##### In ReactJS props are equivalent to parameters of a pure javascript function.


### Props are immutable.

##### Because these are developed in the concept of pure functions. In pure functions we cannot change the data of parameters.

##### So, also cannot change the data of a prop in ReactJS.


### What is component ?


##### As we know that there are two types of components:


#### Stateful ReactJS Component

#### Stateless ReactJS Component


##### All class based components can be considered as stateful ReactJS components.



#### Class Component:-


##### These components are created using ES6’s class syntax. They have some additional features such as the ability to contain logic (for example methods that handle onClick events), local state (more on this in the next chapter) and other capabilities to be explored in later sections of the book.


##### Stateful ReactJS Components inherits the class React.Component so, state get’s inherited.


=> Class because they are basically classes

=> Smart because they can contain logic

=> Stateful because they can hold and/or manage local state

=> Container because they usually hold/contain numerous other (mostly 



For Exapmle:


class Greeting extends React.Component {
  render(){
    return
	
	``` <h1>Hi, I’m a smart component!</h1>```
  }
}




### How do I choose which component type to use?


- Use a class component if you:


=> need to manage local state

=> need to add lifecycle methods to your component

=> need to add logic for event handlers


![Stateful component](https://cms-assets.tutsplus.com/uploads/users/1795/posts/29541/image/Stateful-vs-Stateless-Component-Tutorial-Class-Component.jpg)




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


 const Greeting = () => ```<h1>Hello World today!</h1>```



##### Stateless ReactJS Components are pure javascript functions so, we don’t need to have state.






### How to send data from Parent component to Child component.




![Communication between more than two component](https://pbs.twimg.com/media/Cfi8BcWUIAAuujo.jpg)





##### Which strategy you use depends on the relationship between the components that should be communicating.


##### In this project there are Four component App, Content,Header,Test.


##### I learnt how to send data from parent to each child component.



     For Example:

     Class Parent extends React.Component{
     constructor(){
     super()
     this.state={company:'Happay'}
     }
     render(){
         return(
             <div>
             <child
             data={this.state.company}
             />
             </div>
         );
     }
    }
    class Child extends React.component{
        render(){
            return(
                {this.props.data}
            )
        }
    }


