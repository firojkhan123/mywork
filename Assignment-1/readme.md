# Assignment- 1

## (Validation logic for Date)

#### Learn Select Tag to create a drop-down list with options:

##### The select element is used to create a drop-down list.

#####The option tags inside the select element define the available options in the list.

### About var, let and const keywords in details.

### What is Var ?

##### The JavaScript variables statement is used to declare a variable and, optionally, we can initialize the value of that variable.

#####Example: var a =10;

Variable declarations are processed before the execution of the code.
The scope of a JavaScript variable declared with var is its current execution context.
The scope of a JavaScript variable declared outside the function is global.
Consider the following code snippet.

function nodeSimplified(){
  var a =10;
  console.log(a);  // output 10
  if(true){
   var a=20;
   console.log(a); // output 20
  }
  console.log(a);  // output 20
}
In the above code, you can find, when the variable is updated inside the if loop, that the value of variable "a" updated 20 globally, hence outside the if loop the value persists. It is similar to the Global variable present in other languages. But, be sure to use this functionality with great care because there is the possibility of overriding an existing value.

#### What is let ?

##### The let statement declares a local variable in a block scope. It is similar to var, in that we can optionally initialize the variable.

#####Example: let a =10;

The let statement allows you to create a variable with the scope limited to the block on which it is used.
It is similar to the variable we declare in other languages like Java, .NET, etc.
Consider the following code snippet.

function nodeSimplified(){
  let a =10;
  console.log(a);  // output 10
  if(true){
   let a=20;
   console.log(a); // output 20
  }
  console.log(a);  // output 10
}
It is almost the same behavior we see in most language.

function nodeSimplified(){
  let a =10;
  let a =20; //throws syntax error
  console.log(a); 
}
Error Message: Uncaught SyntaxError: Identifier 'a' has already been declared.

However, with var, it works fine.

function nodeSimplified(){ 
  var a =10;   
  var a =20;   
  console.log(a);  //output 20 
}
The scope will be well maintained with a let statement and when using an inner function the let statement makes your code clean and clear.

I hope the above examples will help you better understand the var and let commands and if you have any queries please write me in the comment section.

### What is const ?

##### const statement values can be assigned once and they cannot be reassigned. The scope of const statement works similar to let statements.

#####Example: const a =10;

function nodeSimplified(){
  const MY_VARIABLE =10;
  console.log(MY_VARIABLE);  //output 10 
}
As per usual, naming standards dictated that we declare the const variable in capital letters. const a =10 will work the same way as the code given above. Naming standards should be followed to maintain the code for the long run.

Question: What will happen when we try to reassign the const variable?
Consider the following code snippet.

function nodeSimplified(){
  const MY_VARIABLE =10;
  console.log(MY_VARIABLE);  //output 10
  MY_VARIABLE =20;           //throws type error
  console.log(MY_VARIABLE); 
}

For Example:
	<select id="month" name="month" onchange="monthOnChange()">
          <option selected>Month</option>
           <option>January</option>
          <option>February</option>
          <option>March</option>
          <option>April</option>
          <option>May</option>
          <option>June</option>
          <option>July</option>
          <option>August</option>
          <option>September</option>
          <option>October</option>
          <option>November</option>
          <option>December</option>
        </select>

### How to add our logic in Javascripts.

#### How to call javascripts function with onchange event.

   For Example:

   <select id="date" name="date" onchange="dateOnChange()">
			<option selected="" value="Default">Date</option>
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
			<option value="4">4</option>
			<option value="5">5</option>
			<option value="6">6</option>
			<option value="7">7</option>
			<option value="8">8</option>
			<option value="9">9</option>
			<option value="10">10</option>
			<option value="11">11</option>
			<option value="12">12</option>
			<option value="13">13</option>
			<option value="14">14</option>
			<option value="15">15</option>
			<option value="16">16</option>
			<option value="17">17</option>
			<option value="18">18</option>
			<option value="19">19</option>
			<option value="20">20</option>
			<option value="21">21</option>
			<option value="22">22</option>
			<option value="23">23</option>
			<option value="24">24</option>
			<option value="25">25</option>
			<option value="26">26</option>
			<option value="27">27</option>
			<option value="28">28</option>
			<option value="29">29</option>
			<option value="30">30</option>
			<option value="31">31</option>
</select>

### What is javascript function ?

##### A function is a group of reusable code which can be called anywhere in your program. This eliminates the need of writing the same code again and again. It helps programmers in writing modular codes. Functions allow a programmer to divide a big program into a number of small and manageable functions.

### Calling a Function

##### To invoke a function somewhere later in the script, you would simply need to write the name of that function as shown in the following code.



For Example:

function dateOnChange(){
	days=document.getElementById("date").value;	
	days = parseInt(days);
}



### What is an Event ?

##### JavaScript's interaction with HTML is handled through events that occur when the user or the browser manipulates a page. When the page loads, it is called an event. When the user clicks a button, that click too is an event. Other examples include events like pressing any key, closing a window, resizing a window, etc.


## Learn how to play with javascripts Data Structure like object key value pair.

#### Event handlers can be used to handle, and verify, user input, user actions, and browser actions:

- Things that should be done every time a page loads
- Things that should be done when the page is closed
- Action that should be performed when a user clicks a button
- Content that should be verified when a user inputs data



## How to create Javascript Object.

### What is Object in javaScript ?

#### JavaScript is an Object Oriented Programming (OOP) language. A programming language can be called object-oriented if it provides four basic capabilities to developers.

 
 ### Concept of Object Oriented Programing 

##### Encapsulation − the capability to store related information, whether data or methods, together in an object.

###### Inheritance − the capability of a class to rely upon another class (or number of classes) for some of its properties and methods.

##### Polymorphism − the capability to write one function or method that works in a variety of different ways.


### The Object constructor creates an object wrapper.

#### As we know that every object associated with another object in javascript.


![Object Oriented JavaScript.](https://banisd.files.wordpress.com/2014/01/protochain1-e1389963022801.png)


### Real Life Objects, Properties, and Methods

#### In real life, a car is an object.

#### A car has properties like weight and color, and methods like start and stop:

#### nameValuePair1, nameValuePair2, and nameValuePairN

## In this assignment I used literal object key values pairs

For Example:

function validate(){
	var monthDaysMap = {
				'January': '31', 
				'February': '29',
				'March': '31', 
				'April': '30',
				'May': '31', 
				'June': '30',
				'July': '31', 
				'August': '31',
				'September': '30', 
				'October': '31',
				'November': '30', 
				'December': '31',
			}

## How to set Concept of LeapYear using in this assignment.

	if (days==undefined && month==undefined && year==undefined) {
		alert("please inter value");
	}

	if(monthDaysMap[month] >= days){
				if(month == "February")
				{ 
					var isLeapYear= false;
                   	    if( (0 == year % 4) && (0 != year % 100) || (0 == year % 400) )
                   	    {
                   	    	isLeapYear =true;
                        }
                    	if ((isLeapYear==false) && (days>=29))
                          {
                        	console.log("incorrect")
						   alert("incorrect date");
						  }
					   else if ((isLeapYear==true) && (days>29))
						  {
						  	console.log("incorrect")
						   alert("incorrect date");
                          }
                          else{
                          	console.log("given input date is correct")
                          }
				 }
				 else{
				 		console.log("given input date is correct")
				 }
	}
	else{
	 	console.log("given input date is not correct")
		alert("incorrect date");
	}

[click here for demo](file:///Users/firojkhan/Desktop/mywork/Assignment-2/multipleclick.html#menu1)
