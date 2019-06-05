function pmove () {
    var selected = document.bkmkmenu.bkmks.selectedIndex;
    if (selected > 0) {
	window.open (document.bkmkmenu.bkmks.options[selected].value);
    }
}
