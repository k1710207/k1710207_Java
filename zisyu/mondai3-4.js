function change_color(){
    for (i=0; i<document.bkmkmenu.bkmks.length; i++) {
	if (document.bkmkmenu.elements[i].checked) {
	    document.getElementById("target").style.color = document.bkmkmenu.elements[i].value;
	}
    }
}
