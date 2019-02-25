# Create React App

## How to create new React app.

### Available Scripts

####  'npx create-react-app my-app'
####  'cd my-app'
####  'start npm'

# Assignment-9

#### I have added click event fires a function when the user clicks on button.

##### Learn how to send data from Parent component to Child component, and also pass data from Child component to Parent component with the help of button event.


For Exampole:

Inside constructor we have to bind this method :-


constructor(){
    super()
    this.state={
       Name:'Hello world'
    }
    this.onGeeks = this.onGeeks.bind(this)
  }


   <Test
          x={this.state.Name} 
          temp={this.onGeeks}
    />


    constructor(){
    super()
    this.state={
      Lastname:'Welcome to Happay'
    }
  }
  _click(xyz){
    console.log('jitender',xyz)
    this.props.temp(xyz);
  }
  render() {
    return (
      <div className="App">
        {this.props.x}
        <button onClick={this._click.bind(this,this.state.Lastname)}>onClick</button>
      </div>
    );
  }

  ### I useed to popup boxes: Alert box.

 #### JavaScript has three kind of popup boxes: Alert box, Confirm box, and Prompt box.
