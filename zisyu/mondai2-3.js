var Timer;


function move(){
    var x = parseInt(document.images["myimg"].style.left);
    if(x <= 400){
	x = x + 10;
	document.images["myimg"].style.left = x + "px";
    }
}

function control(){
    Timer = setInterval('move()', 100);
}

control();
