/*
Validation code
*/

"use strict mode";
var formValidity = true;

function setUpPage() {
	createEventListeners();
}

function createEventListeners() {
	var form = document.getElementsByTagName("form")[0];
	if (form.addEventListener) {
		form.addEventListener("submit", validateFrom, false);
	} else if (form.attachEvent) {
		form.attachEvent("onsubmit", validateFrom);
	}
}
if (window.addEventListener) {
	window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
	window.attachEvent("onload", setUpPage);
}
