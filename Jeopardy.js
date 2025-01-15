window.addEventListener("load", addListener);

function addListener()
{
	document.getElementById("entTeam").addEventListener("click", ShowGrid);
	document.getElementById("return").addEventListener("click", Mainmenu);
}

function ShowGrid()
{
	numTeam = document.getElementById("WhatTeam").value;
	localStorage.setItem("WhatTeam", numTeam);
	window.location.href = "Jeopardy2.html";
}

function Mainmenu()
{
	window.location.href = "menu.html";
}