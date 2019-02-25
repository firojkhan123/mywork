# Create React App

## How to create new React app.

### Available Scripts
####  'npx create-react-app my-app'
####  'cd my-app'
####  'start npm'



#### It will create a directory called my-app inside the current folder.
#### Inside that directory, it will generate the initial project structure and install the transitive dependencies:

my-app  
├── README.md   
├── node_modules  
├── package.json   
├── .gitignore   
├── public  
│   ├── favicon.ico  
│   ├── index.html  
│   └── manifest.json   
└── src  
      ├── App.css  
      ├── App.js  
      ├── App.test.js  
      ├── index.css  
      ├── index.js  
      ├── logo.svg  
      └── serviceWorker.js 



Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### What is React ?

#### React is a JavaScript library for building user interfaces.

### What is State ?

#### As we know that we can define the initial state by assigning this.state in the constructor.

#### The state is mutable This means that state can be updated in the future.

For Example:

Class Test extends React.Component{
	constructor(){
	super()
	this.state={data:'Welcome to Happay'}
	}
}

### What is Prop ?

#### As we know that In ReactJS we use props to send data to components props are immutable.

#### Because these are developed in the concept of pure functions. In pure functions we cannot change the data of parameters.

### What is component ?

#### As we know that there are two types of components:

#### Stateful ReactJS Component
#### Stateless ReactJS Component

##### All class based components can be considered as stateful ReactJS components.

  ##### Stateful ReactJS Components inherits the class React.Component so, state get’s inherited.

##### All function based components can be considered as stateless ReactJS components.

   ##### Stateless ReactJS Components are pure javascript functions so, we don’t need to have state.



  # Assignment- 6

#### How to send data from Parent component to Child component.

#### In this project there are Four component App, Content,Header,Test.

#### I learnt how to send data from parent to each child component.

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


