function function1(){
	alert("Hello, world!");
	document.getElementById("text").style.fontSize = "24pt";
}

function function2(){
	alert("Text bold, blue, underlined.");
	document.getElementById("text").style.fontWeight = "bold";
	document.getElementById("text").style.color = "blue";
	document.getElementById("text").style.textDecoration = "underline";
}

function function3(){
	alert("Text boring");
	document.getElementById("text").style.fontWeight = "normal";
	document.getElementById("text").style.color = "black";
	document.getElementById("text").style.textDecoration = "none";
}

function function4(){
	var str = document.getElementById("text").value;
	var upper = str.toUpperCase();
	var parts = upper.split(" ");
	str = parts.join("-Moo ");
	document.getElementById("text").value = str;
}