//TODO: fix window arith

/********************************************
*                                           *
*       parse and render lots               *
*                                           *
********************************************/
var preloadReady = false;

function parseLotsJson(json){
	var coordinates;
	var xCoord;
	var yCoord;
	var dict = JSON.parse(json);
	for(var key in dict) {
		var value = dict[key];
		console.log(key, value);
		key = key.substring(1, key.length-1);
		coordinates = key.split(', ');
		xCoord = coordinates[0];
		yCoord = coordinates[1];
		renderLots(xCoord, yCoord, value);
	}
}

function renderLots(x, y, value){
	var width = ((x-0.625)*(window.innerWidth/8))-(window.innerWidth/8/2);
	var height = ((y-0.625)*(window.innerHeight/8))-(window.innerHeight/8/2);

	if (value == "House") { 
		var sprite = game.add.sprite(width,
									 height,
									 'house');
	} else if (value == "NoneType") {
		var sprite = game.add.sprite(width,
									 height,
									 'empty_lot');
	} else {
		var sprite = game.add.sprite(width,
 									 height,
									 'business');
	}
	sprite.scale.setTo((window.innerWidth/33)/sprite.width,(window.innerHeight/33)/sprite.height);
}


/********************************************
*                                           *
*       parse and render block              *
*                                           *
********************************************/


function parseBlocksJson(json){
	var coordinates;
	var startX;
	var startY;
	var endX;
	var endY;
	var dir;
	var dict = JSON.parse(json);
	for(var start in dict) {
		var end = dict[start];
		console.log("start is" + start + " end is " + end);
		start = start.substring(1, start.length-1);
		coordinates = start.split(', ');
		startX = coordinates[0];
		startY = coordinates[1];
		end = end.substring(1, end.length-1);
		coordinates = end.split(', ');
		endX = coordinates[0];
		endY = coordinates[1];
		if (startX == endX) { dir = "v"; }
		else if (startY == endY) { dir = "h"; }
		renderBlocks(startX, startY, endX, endY, dir);
	}

}

function renderBlocks(startX, startY, endX, endY, dir){
	var width = ((startX-0.625)*(window.innerWidth/8))-(window.innerWidth/8/2);
	var height = ((startY-0.625)*(window.innerHeight/8))-(window.innerHeight/8/2);
	console.log("dir is "+dir);	
	if (dir == "v") {
		while (height <= ((endY-0.625)*(window.innerHeight/8))-(window.innerHeight/8/2)){
			var sprite = game.add.sprite(width, height,'v');
			sprite.scale.setTo((window.innerWidth/45)/sprite.width,1);
			height += 1;
		}
	} else if (dir == "h") {
		while (width <= ((endX-0.625)*(window.innerHeight/8))-(window.innerHeight/8/2)){
			var sprite = game.add.sprite(width, height, 'h');
			sprite.scale.setTo(1,(window.innerHeight/45)/sprite.height);
			width += 1;
		}
	}

}



/********************************************
*                                           *
*       load house, empty ,and business     *
*       lots sprites                        *
*                                           *
********************************************/

function preload() {
	
	//game.load.baseURL = 'http://examples.phaser.io/assets/';
	//game.load.crossOrigin = 'anonymous';
	//game.load.image('empty_lot', 'sprites/phaser-dude.png');

	game.load.image('house', 'Sprites/house.png');
	game.load.image('empty_lot', 'Sprites/empty_lot.png');
	game.load.image('business', 'Sprites/business.png');
	game.load.image('v', 'Sprites/v.png');
	game.load.image('h', 'Sprites/h.png');


	preloadReady = true;

}
function create() {
}

function update() {
}

function render() {
}