window.addEventListener("load", GetInfo);

function GetInfo()
{
	firstname = localStorage.getItem("firstname");
	lastname = localStorage.getItem("lastname");
	Osis = localStorage.getItem("OSIS");
	fullname = lastname + ", " + firstname;
	
	document.getElementById("lblfullname").textContent = "Name: " + fullname;
	document.getElementById("lblOsis").textContent = Osis;
}

