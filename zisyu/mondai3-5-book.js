function pmove () {
    for (i=0; i<document.bkmkmenu.bkmks.length; i++) {
	if (document.bkmkmenu.elements[i].checked) {
	    location = document.bkmkmenu.elements[i].value;
	}
    }
}
