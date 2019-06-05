var arr = new Array();

function delete_c(){
    document.cookie.split(";").forEach(function(cookie) {
	var date = new Date();
	date.setDate(date.getDate() - 1);
	document.cookie = cookie.trim().replace(/=.*/, "=;expires=" + date.toUTCString() + "/");
    });
}

//delete_c();

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

function nyuryoku(){
    var u_name = prompt("氏名");
    var u_syumi = prompt("趣味");
    setinCookie("氏名", u_name);
    setinCookie("趣味", u_syumi);
    setinCookie("訪問回数", 1);
}

function situmon(){
    if(document.cookie == ""){
	nyuryoku();
    }else{
	getCookieArray();
	var kaisu = parseInt(arr["訪問回数"]);
	kaisu = kaisu + 1;
	setinCookie("訪問回数", kaisu);
	getCookieArray();
	window.alert("氏名:" + arr["氏名"] + "\n趣味:" + arr["趣味"] + "\n訪問回数:" + arr["訪問回数"]);
	var result = window.confirm("趣味を変更しますか");
	if(result){
	    var u_syumi = prompt("趣味");
	    setinCookie("趣味", u_syumi);
	}
    }
}


situmon();
