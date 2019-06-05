var array1 = new Array('a.html', 'i.html', 'u.html', 'e.html', 'o.html');
var array2 = new Array(5);

function createNewWindow(n){
    array2[n] = window.open(array1[n], "", "width=400, height=600, location = 1, scrollbars = 1");
}

function closeWindow(n){
    array2[n].close();
}

function table_make(){
    var i;
    document.write("<table border>");

    document.write("<thead>");
    document.write("<tr>");
    document.write("<th>名前</th>");
    document.write("<th>open</th>");
    document.write("<th>close</th>");
    document.write("</tr>");
    document.write("</thead>");

    
    document.write("<tbody>");

    for(i = 0; i <= 4; i++){
	document.write("<tr>");

	document.write("<td>", array1[i], "</td>");
	document.write("<td>", "<button onclick=createNewWindow(",i,")>Open</button>", "</td>");
	document.write("<td>", "<button onclick=closeWindow(",i,")>Close</button>", "</td>");

	document.write("</tr>");
    }
    
    document.write("</tbody>");
    document.write("</table>");
    return;
}

table_make();
