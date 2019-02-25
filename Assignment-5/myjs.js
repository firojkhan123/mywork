(function(){
	console.log('1')
	var defaultimg = './images/defaultimage.png';
	var newGameButton = './images/buttonimg.jpg';
	var btnimg = 'buttonimg.jpg';
	var imgDir = "images/";
	var tiles = [imgDir + 'image1.jpg', imgDir + 'image2.jpg', imgDir + 'image3.jpg',
		imgDir + 'image4.jpeg', imgDir + 'image5.jpg', imgDir + 'image6.jpg',
		imgDir + 'image7.jpeg', imgDir + 'image8.jpeg', imgDir + 'image9.jpeg',
		imgDir + 'image10.jpg', imgDir + 'image11.jpeg', imgDir + 'image12.jpg',
		imgDir + 'image13.jpg', imgDir + 'image14.jpg', imgDir + 'image15.jpeg'];

	var images=[];
	for (var i = 0; i < 15; i++) {
		images[i] = new Image();
  	    images[i].src = tiles[i];
		tiles[i] = '<img src="' + tiles[i] + '" width="60" height="60" alt="tile">';
		tiles[i + 15] = tiles[i];
	}
	var hit1, hit2, tileHitcnt, temp, cont = 0;

	function shufleArray() {
		tiles.sort(function () {
			return .5 - Math.random()});
	}

	function start() {
		shufleArray();
		for (var i = 0; i <= 29; i++) {
			displayDefault(i);
		}
		tileHitCnt = 0;
	}

	function show(sel) {
		
		if (tileHitcnt > 1) {
			clearTimeout(temp);
			verdict();
		}
		document.getElementById('t' + sel).innerHTML = tiles[sel];
		if (tileHitcnt == 0) {
			hit1 = sel;
		} 
		else {
			hit2 = sel;
			temp = setTimeout(verdict, 900);
		}
		tileHitcnt++;
	}

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


 	 	function displayDefault(i) {
			  console.log('value of i',i)
			  if(i == undefined){
				  debugger;
			  }
			document.getElementById('t'+i).innerHTML = '<img src="'+defaultimg+'" width="60" height="60" alt="back" \/>';
			document.getElementById('t'+i).onclick=function(){show(i)};
		}


	createPlot('container');
	start(); 
})();