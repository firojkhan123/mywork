

# Assignment- 4



## (Todo App)


### Learn div tag to used in this assignment:



##### The <div> tag defines a division or a section in an HTML document.


##### Learn  ```<input>``` tag specifies an input field where the user can enter data.




For Example:


<input class="input-text bulet-float" type="text" id="myInput" placeholder="Title...">


### What is javascript function ?

##### A function is a group of reusable code which can be called anywhere in your program. This eliminates the need of writing the same code again and again. It helps programmers in writing modular codes. Functions allow a programmer to divide a big program into a number of small and manageable functions.

### Calling a Function

##### To invoke a function somewhere later in the script, you would simply need to write the name of that function as shown in the following code.


For Example:

function myfunction(){
  alert('Welcome to Happay)
}
myfunction();



### Leartn HTML DOM createElement() Method:

##### The createElement() method creates an Element Node with the specified name.

##### Learn creates an Element Node and TextNode with the specified name.


For Example:

function newElement() {

  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  
  if (inputValue === '') {
    alert("You must write something!");
  } 
  else 
  {
    document.getElementById("myUL").appendChild(li);
    console.log(document.getElementById("myUL").appendChild(li));
  }
  document.getElementById("myInput").value ="";
  console.log(1);
var checkbox = document.createElement('input');
checkbox.type = "checkbox";
checkbox.id = "inputValue";

li.setAttribute("id",inputValue);
console.log(inputValue);
checkbox.addEventListener("change", function(event){
   var temp=document.getElementById(inputValue);
  temp.classList.toggle("line-through-ontext");
});
var temp=li.appendChild(checkbox);

li.appendChild(t);
document.getElementById(inputValue).style.padding='20px'


}


##### Learn addEventListener() method attaches an event handler to the specified element.

For Example:


document.getElementById("myBtn").addEventListener("click", function(){
  document.getElementById("demo").innerHTML = "Hello World";
});

##### Learn appendChild() Method  text, remember to create the text as a Text node which you append to the paragraph, then append the paragraph to the document.

For Example:


var temp=li.appendChild(checkbox);

li.appendChild(t);



##### Learn alert box pops up, the user will have to click "OK" to proceed.


For Example:

document.write('#'),document.alert('#')

### Learn appendChild() method using checkbox

For Example:

var checkbox = document.createElement('input');
checkbox.type = "checkbox";
checkbox.id = "inputValue";





### Learn Styling with CSS:


### I used Internal CSS in this assignment.


##### How to created your own html page and style with css .


For Example:


 ```<"link rel="stylesheet" type="text/css" href="mystyle.css">``` 



##### How to created your own html page and style with css .



##### To lear style attribute Setting the style of an HTML element, can be done with the style attribute type color,font-size,font-family etc.




[click here for demo](file:///Users/firojkhan/Desktop/mywork/Assignment-4/todolist.html)
