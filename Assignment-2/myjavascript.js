function myfunction(x)
{
 	
 	console.log('shape',document.getElementsByClassName("shape"));
 	document.getElementsByClassName("shape")[x].style.background = 'red';
 	 document.getElementsByClassName("shape")[x].style.display = 'block';

 	 // for()
 	// }
 	// alert("hello");
 	for(let i = 0; i <document.getElementsByClassName("shape").length ; i++ ){
 		if(i === x){
 			continue;
 		}else{
 			 	document.getElementsByClassName("shape")[i].style.background = 'blue';
 	 document.getElementsByClassName("shape")[i].style.display = 'none';

 		}
 	}
}









