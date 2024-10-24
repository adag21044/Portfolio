// JavaScript Document



function makeNavbar(target){
	"use strict";
	
	
	var logoimage = document.createElement("img");
	logoimage.src = "./images/logo.png";
	
	//logoimage.classList.add("floatleft");
	//var addimagehere = document.getElementById("logo");
	//addimagehere.appendChild(logoimage)	

	var addimage = 	document.getElementById(target);
	addimage.appendChild(logoimage);
	
	var text = "<h1>UMD Game Developers Club</h1>";
	
	//text += "<h3>Mek gaem!</h3>";
	text += "<div class ='Navbar'> <a href='index.html#About'>About</a> | <a href='index.html#Events'>Events</a> | <a href='Projects.html'>Projects</a> | <a href='Games.html'>Games</a> | <a href='Resources.html'>Resources</a> | <a href='index.html#Contact'>Contact</a></div>";
	
	//text += "<ul><li><a href='Contact.html'>Events</a></li><li><a href='Contact.html'>Projects</a></li> <li><a //href='Contact.html'>Games</a></li> <li><a href='Contact.html'>Resources</a></li> <li><a href='index.html#About'>About</a>  | <a href='Contact.html'>Contact</a></li></ul>";
	
	//text  += "<img class = 'mySlides'  src = './images/screenshots/bib.png' >";
	//text  += "<img class = 'mySlides'  src = './images/screenshots/lg.png' >";
	//text  += "<img class = 'mySlides'  src = './images/screenshots/woa.png' >";
	//text  += "<img class = 'mySlides'  src = './images/screenshots/ss.png' >";
	
	
	var windowh = window.innerHeight;
	
	if (windowh < 500){
		
		windowh = 500;
		
	}
	
	
	document.getElementById(target).style.height = windowh + 'px';
	
	
	document.getElementById(target).innerHTML += text;
	
	
	
	

	
}

var myIndex = 0;

function carousel(){
	"use strict";
	
	
	var backgrounds = new Array( "url('./images/screenshots/ss.png')", "url('./images/screenshots/lg.png')", 
							     "url('./images/screenshots/woa.png')", "url('./images/screenshots/bib.png')");
	
	var backimage = document.getElementsByClassName("headlogo");
	
	
	
    myIndex++;
    if (myIndex > 4) {myIndex = 1;}    
    backimage[0].style.backgroundImage = backgrounds[myIndex - 1]; 
    setTimeout(carousel, 2000);
	
	
	
	
}


makeNavbar("Menu");
minHeightjs("Events");

function minHeightjs(target){
	"use strict";
	
	var windowh = window.innerHeight;
	
	if (windowh < 500){
		
		windowh = 500;
		
	}
	
	document.getElementById(target).style.minHeight = windowh + 'px';
	
	
}


function MakeTables(){
	"use strict";

	
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	
	var uTable = document.getElementById("upcoming");
	
	var pTable = document.getElementById("past");
	
	var events = [
		
		[[8, 30 , 2018], "Chill First Meeting", "6:00 PM", "CSIC 2120", "Catch up and discuss semester goals and meeting structure"],
		[[9, 6 , 2018], "First Look Prep Meeting", "6:00 PM", "CSIC 2120","Prepare Demos for first look fair and get volunteers"],
		[[9, 13 , 2018], "First Look Meeting", "6:00 PM", "CSIC 1115", "Inform new people about the club and demo"],
		[[9, 13 , 2018], "Unity Tutorial: Joey", "7:00 PM", "CSIC 2120", "Basic Unity tutorial for complete beginners. Covers unity workflow/inspector and some light scripting"],
		[[9, 14 , 2018], "Unity Tutorial: Josh","5:00 PM", "CSIC 2120", "Basic Unity tutorial for complete beginners. Covers unity workflow/inspector and some light scripting"],
		[[9, 15 , 2018], "GameMaker Tutorial: Stephen","3:00 PM", "CSIC 2120", "Basic GameMaker tutorial for complete beginners. Covers GM workflow, objects, and inspector"]
				
	];
	var row = uTable.insertRow(0);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(2);
	
	cell1.innerHTML = "Date";
	cell2.innerHTML = "Event";
	cell3.innerHTML = "Time";
	cell4.innerHTML = "Location";
	
	var d = new Date();
	
	var curmonth = d.getMonth();
	var curday = d.getDate();
	var curyear = d.getFullYear();
	
	var ucounter = 0;
	
	for (var i = 0; i < events.length; i++){
		
	var eventdate = events[i][0];
	
	//add to upcoming table	
	if (eventdate[0] > curmonth + 1 || (eventdate[0] === (curmonth + 1) && eventdate[1] >= curday + 1) && eventdate[2] >= curyear){
		
	row = uTable.insertRow(ucounter + 1);
    cell1 = row.insertCell(0);
	cell2 = row.insertCell(1);
	cell3 = row.insertCell(2);
	cell4 = row.insertCell(2);
	
		
	cell1.innerHTML = eventdate[0] + "/" + (eventdate[1]) ;
	cell2.innerHTML = events[i][1];
	cell3.innerHTML = events[i][2];
	cell4.innerHTML = events[i][3];
		
	ucounter++;
		
	//add details row
	row = uTable.insertRow(ucounter + 1);
	cell1 = row.insertCell(0);
	cell1.className = "hiddenrow";	
	cell1.colSpan = 4;
	cell1.innerHTML = events[i][4];
	cell1.style.display = 'none';
	ucounter++;	
	} else {		}
}
	
	
	
}


