# Create React App

## How to create new React app.

### Available Scripts

####  'npx create-react-app my-app'
####  'cd my-app'
####  'start npm'

# Assignment-10

#### I used to React Life Cycle Which most important part of Reactjs.

#### Each component has several “lifecycle methods”

#### React component lifecycle have mainly four phases.

    1) Initialization
    2) Mounting
    3) Updation
    4) Unmounting

 #### componentWillMount:-

 ##### ComponentWillMount method will be called before component render to browser and also it is client side and as well server side rendering.

 #### Render:-

##### Render method you will see component on Browser and this method should be pure. You can not update state in this method.

#### componentDidMount:-

##### The componentDidMount() method runs after the component output has been rendered to the DOM. This is a good place to set the api.

#### shouldComponentUpdate:-

#####  In this method you can check whether re-rendering the component is necessary or not. return false if you don’t want to re-render component.

#### componentWillUpdate:-

##### This method will be called after shouldComponentUpdate(only if it returns true).And before rendering render method.

#### Rerender:-

##### In this method updated component will be rendered to screen. with new data(or changes).

#### componentDidUpadate:-

##### componentDidUpdate will be called after render method.

#### componentWillUnMount:-

##### componentWillUnmount destroyed and removed from the DOM and only one lifecycle method is active.

