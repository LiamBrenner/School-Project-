window.alert("We are still under development");

var DrawerToggle = document.getElementById('drawer-toggle');

function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('timestamp').innerHTML = h+":"+m+":"+s;
    var t = setTimeout(function(){startTime()},500);
}


function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

var myVar = setInterval(function(){myTimer()},1000);

function startStop() {
	
	if (DrawerToggle.checked) {
		window.alert("Drawer Opened");	
	} else {
        
}