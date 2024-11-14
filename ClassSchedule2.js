window.addEventListener("load", GetInfo);

function GetInfo()
{
	firstname = localStorage.getItem("firstname");
	lastname = localStorage.getItem("lastname");
	fullname = lastname + ", " + firstname;
	Osis = localStorage.getItem("OSIS");
	Gradelevel = localStorage.getItem("lvl");
	OffclassF = localStorage.getItem("OfficialF");
	OffclassNum = localStorage.getItem("Officialnum");
	OffclassL = localStorage.getItem("OfficialL");
	Officialclass = OffclassF  + OffclassNum + OffclassL;
	CounsF = localStorage.getItem("CounsFN");
	CounsL = localStorage.getItem("CounsLN");
	CounselorN = CounsL + " " + CounsF;
	
	document.getElementById("lblfullname").textContent = "Name: " + fullname;
	document.getElementById("lblOsis").textContent = "Student ID: " + Osis;
	document.getElementById("Glvl").textContent = "Grade level: " + Gradelevel;
	document.getElementById("OffClass").textContent = "Official class: " + Officialclass;
	document.getElementById("Counselor").textContent = "Counselor: " + CounselorN;
}
