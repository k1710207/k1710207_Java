var bgcolor_now = 0;

function set_color(){
    if(bgcolor_now == 0){
	document.bgColor = "red";
    }else if(bgcolor_now == 1){
	document.bgColor = "blue";
    }else if(bgcolor_now == 2){
	document.bgColor = "yellow";
    }

    bgcolor_now = bgcolor_now + 1;
    if(bgcolor_now == 3)
	bgcolor_now = 0;
}

function change_back(){
    setInterval('set_color()', 3000);
}

change_back();
