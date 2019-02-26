# Create React App

## How to create new React app.

### Available Scripts

####  'npx create-react-app my-app'
####  'cd my-app'
####  'start npm'

![ReactArchitecture](https://daveceddia.com/images/cra-1.0-initial-folder.png)

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


# Assignment-8



##### In this Assignment to learn how to send data from Parent  component to Child component, and also pass data from Child component to Parent component.


##### We send data from App component via A, B, and C like Grand parent to child components.


##### Then send data child to parent via every component using callback.




### What is callback ?


##### A callback is a function that is to be executed after another function has finished executing — hence the name ‘call back’.



     export default class C extends Component{
    constructor(){
        super()
        this.state={temp2:10}
    }
   _click(x){

        this.props.temp1(x);

   }
    render() {
        return(
            <div>
                {this.props.r}
                <button onClick={this._click.bind(this,this.state.temp2)}>onclick</button>
            </div>

        )
    }
}
        onGeek(z){
        this.props.temp(z);
        console.log('value',z)
    }

![Communication between more than two component](https://pbs.twimg.com/media/Cfi8BcWUIAAuujo.jpg)


For Example

### Parent to child 

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


### Child to Parent

   ![Child to parent](https://www.javascriptstuff.com/static/child-to-parent-a34180d7d83bb61f4f1fab6eecc620a6-8aa1a.png)

  <MyChild myFunc={this.handleChildFunc} />

##### And the child would call that function like

this.props.myFunc();


##### The simplest way is for the parent to pass a function to the child. The child can use that function to communicate with its parent.

##### Which strategy you use depends on the relationship between the components that should be communicating.

##### In this project there are Four component App, Content,Header,Test.

##### I learnt how to send data from parent to each child component.

### I used to props to send data from one componet to another componet.


### What is Prop ?

##### As we know that In ReactJS we use props to send data to components.

##### In ReactJS every component is treated as a pure javascript function.

##### In ReactJS props are equivalent to parameters of a pure javascript function.

![props](https://i.stack.imgur.com/SO5aF.png)


### Props are immutable.

##### Because these are developed in the concept of pure functions. In pure functions we cannot change the data of parameters.

##### So, also cannot change the data of a prop in ReactJS.


##### In this assignment we are create four components App, test1, test2, test3.

##### We send data from App component via A, B, and C like Grand parent to child components.

For Exapmle

![parent to child](http://www.nikpro.com.au/wp-content/uploads/2018/11/passdata.png)

