var s;
var scl = 20;
function setup() {
createCanvas(600, 600);
s = new Snake();

}


function draw() {

	background(51); 
	s.update();
    s.show(); 
}

function keyPressed() {
    if (keycode === UP_ARROW){
        s.dir(0, -1);
    }else if (keycode === DOWN_ARROW){
            s.dir(0, -);

    }
    else if (keycode === RIGHT_ARROW){
        s.dir(1, 0);

    }else if (keycode === LEFT_ARROW){
    s.dir(-1, 0);

}

 }



}