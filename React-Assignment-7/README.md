# Create React App

## How to create new React app.

### Available Scripts

####  'npx create-react-app my-app'
####     'cd my-app'
####     'start npm'


![ReactArchitecture](https://daveceddia.com/images/cra-1.0-initial-folder.png)


Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


   # Assignment-7


   ### I learn a lot of things to this assignment so i want to share few points.


   ##### Let’s get started with simple example how to increment and decease number on button click and show number depending on button click too.


   ##### IncrementItem() we change our state clicks by adding 1.

   ##### DecreaseItem() we change our state clicks by removing 1.


   ![Increment & Decrement](https://s3-us-west-2.amazonaws.com/codepen-thumbnails/Pen/22474568/thumbnail.large.jpg?v=1520366420)



   ##### In this assignment I learnt Arrow function which is most important concept in JavaScript and arrow functions make our code more concise, and simplify function.

   ### Arraow function

   ##### An arrow function expression is a syntactically compact alternative to a regular function expression, although without its own bindings to the this, arguments, super, or new.target keywords. Arrow function expressions are ill suited as methods, and they cannot be used as constructors.


  
   ##### As we remember "this", arrow functions do not have this. If this is accessed, it is taken from the outside.

   ##### Arrow functions also don’t bind an arguments object. With function expressions.


   ### I am trying to define Using "this” in react functions.


   ##### JavaScript is great, but comparing to other programing languages it has many confusing parts. One of them is the use of this.In this blog post I will explain how to use it right, and what are the tools that JavaScript provide us to ease the use of it. In the end, I will focus on react.



   ### There are three types of function:


   ### 3 types of functions

 - Constructor
 - Function
 - Method

### constructor

Constructor is a function that is used to create new object with the same prototype using the __new__ keyword:
```JavaScript
function Person() {
  this.name = 'amitai';
}
var newPerson = new Person();

console.log(newPerson.name); // ‘amitai’
```
As we can see, we used __this__ in order to set a member of _Person_. When the constructor invoked, this.name got the value of ‘amitai’. And the object _newPerson_ had the property _name_ with the value _amitai_


### function
Function is a "function" if it is not a property of an object:
```JavaScript
function foo() {
  console.log(this); // undefined in “strict mode” or the global variable
}
```
In this case, __this__ will be the global variable, or undefined if we use “use strict”.


### method
Method is a function that is defined as a property of an object:
```JavaScript
var person = {
  fullName: function() {
       return this.firstName + ' ' + this.lastName;
  }
}

person.firstName = 'Amitai';
person.lastName = 'Barnea';
console.log(person.fullName()); // ‘Amitai Barnea’
```
In methods, __this__ is used to refer to other properties of the object, in this case, to _firstName_ and _lastName_.


### What's  the problem?

##### After we understand the differences between the different function types, it is time to describe the problem.  
> Unlike variables, the this keyword does not have a scope, and nested functions do not
> inherit the this value of their caller. If a nested function is invoked as a method, its
> this value is the object it was invoked on. (JavaScript: The Definitive Guide, David Flanagan)


##### It means that there are times that we expect that __this__ will be defined with our object, but it is something completely different!
```JavaScript
var person = {
  fullName: function () {
    var calcFullName = function () {
      return this.firstName + ' ' + this.lastName
    }
    return calcFullName();
  }
}
person.firstName = 'Amitai';
person.lastName = 'Barnea';
console.log(person.fullName()); // Undefined!!!


### One more example given by javascript offical Docs.

function Person() {
  // The Person() constructor defines `this` as an instance of itself.
  this.age = 0;

  setInterval(function growUp() {
   
    this.age++;
  }, 1000);
}

var p = new Person();



## The solution
There are 3 solutions for this problem. As JavaScript got more mature the solutions has been improved.

### ES3
In ES3 there was no solution to this problem, but there was a work around:
```JavaScript
var person = {
  fullName: function () {
    var that  = this;
    var calcFullName = function () {
      return that.firstName + ' ' + that.lastName
    }
    return calcFullName();
  }
}

person.firstName = 'Amit';
person.lastName = 'Pandey';
console.log(person.fullName()); // 'Amit Pandey'
```
Because JavaScript uses [closures](https://www.spectory.com/blog/Diving%20into%20JavaScript%20Closures), we took __this__ and put it into __that__. __that__ is in the scope of the inner function and the method is working.


### ES5
ES5 introduced a more elegant solution using the __bind__ method. The __bind__ method is part of the function prototype. It takes the function and bind it to the object that it got in its arguments.
```JavaScript
function addToMe(y) {
  return this.x + y;
}

var num = {
  x: 3
}

var AddToNum = addToMe.bind(num);
console.log(AddToNum(4)); // 7
```
After the __bind__, the function is acting on the object it got.
So how can it solve our problem? We will use bind to connect the inner function to  __this__:
```JavaScript
var person = {
  fullName: function () {
    var calcFullName = function () {
      return this.firstName + ' ' + this.lastName
    }
    calcFullName = calcFullName.bind(this);
    return calcFullName();
  }
}

person.firstName = 'Amit';
person.lastName = 'Pandey';
console.log(person.fullName()); // 'Ammit Pandey'
```
#### It is working!
##### Actually, __bind__ is even stronger, and can pass additional parameters to the function I will not go any deeper on this subject here.

### ES6 Which is most important concept in javaScript.

ES6 fixed this flaw of the language with its arrow functions. Not only that arrow functions are more elegant, they are also inject __this__ into the in their invocation. Now we can write the code like that;
```JavaScript
var person = {
  fullName: function () {
    var calcFullName =  () => {
      return this.firstName + ' ' + this.lastName
    }
    return calcFullName();
  }
}

person.firstName = 'Amit';
person.lastName = 'Pandey';
console.log(person.fullName()); // 'Ammit Pandey'


And it is working!



##### In this Assignment to learn how to send data from Parent component to Child component, and also pass data from Child component to Parent component.

#### Using Callback function to send data child to parent.

![Child to parent](https://www.javascriptstuff.com/static/child-to-parent-a34180d7d83bb61f4f1fab6eecc620a6-8aa1a.png)



### What is a Callback?

##### A callback is a function that is to be executed after another function has finished executing — hence the name ‘call back’.
   







