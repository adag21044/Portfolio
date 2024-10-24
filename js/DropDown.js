// JavaScript Document

var hideableObjects;
var buttons;

function findObjs(){
	
	hideableObjects = document.getElementsByClassName("Hide");
	buttons = document.getElementsByClassName("Switches");
	
	
}

function hideContent(target, button){
	"use strict";
	var but = document.getElementById(button);
    var x = document.getElementById(target);
    if (x.style.display === "inline-block") {
        x.style.display = "none";
		but.classList.add("arleft");
		but.classList.remove("ardown");
    } else {
        x.style.display = "inline-block";
		but.classList.add("ardown");
		but.classList.remove("arleft");
    }
	
}