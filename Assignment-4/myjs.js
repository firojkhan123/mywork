
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