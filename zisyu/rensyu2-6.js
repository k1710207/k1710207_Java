var arr = new Array();

function getCookieArray(){
    if(document.cookie != ''){
	var tmp = document.cookie.split('; ');
	for(var i=0;i<tmp.length;i++){
	    var data = tmp[i].split('=');
	    arr[data[0]] = decodeURIComponent(data[1]);
	}
    }
    return arr;
}

function setinCookie (attr, valu) {
    var cData = attr + "=" + escape (valu) +";";
    var presentDay = new Date ( );
    var dd = presentDay.getDate ( );
    dd = dd +7;
    presentDay.setDate (dd);
    var expTime = presentDay.toGMTString ( );
    document.cookie = cData + "expires="+expTime;
}

function zokusei_set(){
    setinCookie("年齢", 16);
    setinCookie("訪問回数", 0);
}

zokusei_set();

function situmon(){
    var x;
    getCookieArray();
    x = arr["年齢"];
    window.alert(x);
    x = arr["訪問回数"];
    window.alert(x);
}
