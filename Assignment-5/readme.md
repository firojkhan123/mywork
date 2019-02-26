

# Assignment-5


## (Browser-Game)


### Learn a lot of things to this assignment so i want to share few points.



##### So first of all to learn self-executing function as we know that Now we come to auto-execution functions (or self-executing, self-running.





For Example:

(function(){alert('Happay make me Happy')})();



![selef-executing funtion](https://image.spreadshirtmedia.com/image-server/v1/products/107229135/views/1,width=650,height=650,appearanceId=2,version=1478006133/javascript-is-sexy-vneck.jpg)



##### Learn Array operation and insert images into the array dynamically.


For Example:
var images=[];
	for (var i = 0; i < 15; i++) {
	images[i] = new Image();
    images[i].src = tiles[i];
	tiles[i] = '<img src="' + tiles[i] + '" width="60" height="60" alt="tile">';
	tiles[i + 15] = tiles[i];




##### I take some variable hit1,hit2 if match to increse the cont value.



For Example:

function verdict() {
		tileHitcnt = 0;
		if (tiles[hit1] != tiles[hit2]) {
			displayDefault(hit1);
			displayDefault(hit2);
		} else {
			cont++;
		}
		if (cont >= 15) {
			alert("you win");
		}
	}




#### Learn how to create div with help of document.createElement('#') 	

#### Learn how to append inside div into the div.

For Example:

  	function createPlot(nm) {
	 	 	var d = document.createElement('div');
	 	 	d.align = 'center';
	 	 	var t = document.createElement('table');
	 	 	t.cellpadding = 0;t.cellspacing = 0;t.borders = 0;
	 	 	t.className = "top75 bottom30"


	 	 	for (var a = 0; a <= 5; a++) {
	 	 		t.insertRow(a);
	 	 		for (var b = 0; b <= 4; b++) {
	 	 			t.rows[a].insertCell(b);
	 	 			t.rows[a].cells[b].className = 'blk';
	 	 			t.rows[a].cells[b].id = 't'+((5*a)+b);
	 	 			t.rows[a].cells[b].align = 'center';
	 	 		}
	 	 	}

	 	 		d.appendChild(t);

			var newGameBtn = document.createElement('div');
			newGameBtn.innerHTML= '<img src="'+newGameButton+'"width="150" height="60" alt="New Game" \/>';
			newGameBtn.onclick = start 

			d.appendChild(newGameBtn)
	 	 	document.getElementById(nm).appendChild(d);


	 	 }







##### How to pass argument from one function to another and learn basics of javaScript while doing this assignment.


#### Learn JavaScript conditional control flow and loop.


![loop](https://beginnersbook.com/wp-content/uploads/2015/03/for_loop_Java.jpg)


### Learn Styling with CSS:


#### I used Internal CSS in this assignment.


##### How to created your own html page and style with css .



For Example:


 ```<"link rel="stylesheet" type="text/css" href="mystyle.css">``` 



##### How to created your own html page and style with css .



##### To lear style attribute Setting the style of an HTML element, can be done with the style attribute type color,font-size,font-family etc.



.background-img{
	background: url("images/background.jpg") no-repeat center center;
	background-size: cover;
}

.blk {width:50px;height:50px;overflow:hidden;}
.card {margin:5px;padding:5px;width:40px;height:40px;border:solid 1px #f00;font:bold 3em verdana,arial,sans-serif;}
.back {background:#ccc;cursor:pointer;}
.cf1  {background:#ff0;color:#00f;}
.cf2  {background:#f9f;color:#00f;}
.cf3  {background:#0cf;color:#c00;}

.top75{
	margin-top: 75px;
}

.bottom30{
	margin-bottom: 30px;
}



[click here for demo](file:///Users/firojkhan/Desktop/mywork/Assignment-5/gamepuzzle.html)
