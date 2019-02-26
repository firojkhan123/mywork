# Assignment- 2

## (Create Tab)

### Learn Unordered HTML List.

#### I used Unordered List in this assignment.

- An unordered list starts with the ```<ul>```

```</ul>``` tag. Each list item starts with the ```<li>``` tag.

- The list items will be marked with bullets (small black circles) by default.


For Example:

 <ul class="nav navbar-nav">
      <li class="active" onclick="myfunction(0)"><a href="#menu1">Home</a></li>
      <li onclick="myfunction(1)"><a href="#menu2"  >Product</a></li>
      <li onclick="myfunction(2)"><a href="#menu3" >About</a></li>
      <li onclick="myfunction(3)"><a href="#menu3" >Contact</a></li>
</ul>


### Learn Div tag to used in this assignment:

#### The <div> tag defines a division or a section in an HTML document.


#### So I am created a standard navigation bar is created with
```<nav class="navbar navbar-inverse fixed-navbar-top">.```


##### How to create content tab to show the different type of subject.

![Tabs1](https://www.jqueryscript.net/images/Responsive-jQuery-Content-slider-with-HTML5-Liquid%20Slider.jpg)

##### Learn how to click() method simulates a mouse-click on an element. 

##### Learn getElementById() method returns the element that has the ID attribute with the specified value.


### Learn document object represent our webpage:-

#### If you want to access any element in an HTML page, you always start with accessing the document object.

#### Below are some examples of how you can use the document object to access and manipulate HTML.


### document.getElementById(id)	

- ##### **Find an element by element id**

- ##### **document.getElementsByTagName(name)**

- ##### **Find elements by tag name**

- ##### **document.getElementsByClassName(name)**

- ##### **Find elements by class name**


For Example:

function myfunction(x)
{
 	
 	document.getElementsByClassName("shape")[x].style.background = 'red';
 	 document.getElementsByClassName("shape")[x].style.display = 'block';

 	for(let i = 0; i <document.getElementsByClassName("shape").length ; i++ ){
 		if(i === x){
 			continue;
 		}else{
 			 	document.getElementsByClassName("shape")[i].style.background = 'blue';
 	 document.getElementsByClassName("shape")[i].style.display = 'none';

 		}
 	}
}




## Learn Styling with CSS:

#### I used Internal CSS in this assignment.

##### How to created your own html page and style with css .

For Example:


 ```<"link rel="stylesheet" type="text/css" href="mystyle.css">``` 



##### How to created your own html page and style with css .


##### Learn style attribute and change different type color.



[click here for demo](file:///Users/firojkhan/Desktop/mywork/Assignment-2/multipleclick.html#menu1)
