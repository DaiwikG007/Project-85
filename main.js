//Create a reference for canvas 
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

//Give specific height and width to the car image
var car_width = 75; 
var car_height = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
var car_x = 5;
var car_y = 225;

function add() {
	//upload car, and background images on the canvas.
		background_imageTag= new Image();
		background_imageTag.onload= uploadBackground();
		background_imageTag.src= background_image;
	
		car_imageTag= new Image();
		car_imageTag.onload= upload_greencar();
		car_imageTag.src= greencar_image;
	}


function uploadBackground() {
	//Define function ‘uploadBackground’
ctx.drawImage(background_imageTag,0,0,canvas.width,canvas.height);
}

function upload_greencar() {
	//Define function ‘uploadgreencar’.

	ctx.drawImage(car_imageTag,car_x,car_y,car_width,car_height);
}



window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	
	if(car_y >=0){
		car_y = car_y-10;
		console.log('when up key is pressed'+ car_x + "," + car_y);
		uploadBackground();
		upload_greencar();

	}
}

function down()
{

	if(car_y <=300){
		car_y = car_y+10;
		console.log('when down key is pressed'+ car_x + "," + car_y);
		uploadBackground();
		upload_greencar();

	}
}

function left()
{

	if(car_x >=0){
		car_x = car_x-10;
		console.log('when up key is pressed'+ car_x + "," + car_y);
		uploadBackground();
		upload_greencar();

	}
}

function right()
{

	if(car_x <=700){
		car_x = car_x+10;
		console.log('when up key is pressed'+ car_x + "," + car_y);
		uploadBackground();
		upload_greencar();

	}
}
