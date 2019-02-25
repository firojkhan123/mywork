# Create React App

## How to create new React app.

### Available Scripts

####  'npx create-react-app my-app'
####     'cd my-app'
####     'start npm'

# Assignment-5

## (Browser-Game)


#### Learn a lot of things to this assignment so i want to share few points.

#### So first of all to learn self-executing function as we know that Now we come to auto-execution functions (or self-executing, self-running.

For Example:

(function(){alert('Happay make me Happy')})();

#### Learn Array operation and insert images into the array dynamically.

For Example:
var images=[];
	for (var i = 0; i < 15; i++) {
	images[i] = new Image();
    images[i].src = tiles[i];
	tiles[i] = '<img src="' + tiles[i] + '" width="60" height="60" alt="tile">';
	tiles[i + 15] = tiles[i];


#### I take some variable hit1,hit2 if match to increse the cont value.


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



#### How to pass argument from one function to another and learn basics of javaScript while doing this assignment.

#### Learn JavaScript conditional control flow and loop.


[click here for demo](file:///Users/firojkhan/Desktop/mywork/Assignment-5/gamepuzzle.html)