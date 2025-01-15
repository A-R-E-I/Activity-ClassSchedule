window.addEventListener("load", addListener);

function addListener()
{
	document.getElementById("entTeam").addEventListener("click", ShowGrid);
	document.getElementById("return").addEventListener("click", Mainmenu);
	numTeam = localStorage.getItem("");
}