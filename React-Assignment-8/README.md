# Create React App

## How to create new React app.

### Available Scripts

####  'npx create-react-app my-app'
####  'cd my-app'
####  'start npm'

# Assignment-8

#### In this Assignment to learn how to send data from Parent  component to Child component, and also pass data from Child component to Parent component.


For Example

## Parent to child 

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

<MyChild myFunc={this.handleChildFunc} />

#### And the child would call that function like

this.props.myFunc();


#### The simplest way is for the parent to pass a function to     the child. The child can use that function to communicate    with its parent.

