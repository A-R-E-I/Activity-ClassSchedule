window.addEventListener("load", addListener);
let count = 0 , i = 1;

function addListener()
{
	document.getElementById("btnNext").addEventListener("click", StudentQuestion);
	document.getElementById("btnNext2").addEventListener("click", Whatperiod);
	document.getElementById("NumofPeriod").style.display = "none";
	document.getElementById("scheduleInfo").style.display = "none";
	
	
	
}


function StudentQuestion()
{ 
	fname = document.getElementById("txtfname").value;
	localStorage.setItem("firstname", fname);
	lname = document.getElementById("txtlname").value;
	localStorage.setItem("lastname", lname);
	StudentId = document.getElementById("txtosisnum").value;
	localStorage.setItem("OSIS", StudentId);
	Gradelvl = document.getElementById("txtgradelvl").value;
	localStorage.setItem("lvl", Gradelvl);
	OffFletter = document.getElementById("txtFletter").value;
	localStorage.setItem("OfficialF", OffFletter);
	Offnum = document.getElementById("txtClassnum").value;
	localStorage.setItem("Officialnum", Offnum);
	OffLletter = document.getElementById("txtLletter").value;
	localStorage.setItem("OfficialL", OffLletter);
	CounselorFN = document.getElementById("txtCounsfname").value;
	localStorage.setItem("CounsFN", CounselorFN);
	CounselorLN = document.getElementById("txtCounslname").value;
	localStorage.setItem("CounsLN", CounselorLN);
	document.getElementById("studentQuestion").style.display = "none";
	document.getElementById("NumofPeriod").style.display = "block";
}

function Whatperiod()
{
	
	PeriodAmount = document.getElementById("txtperiod").value;
	localStorage.setItem("Periodnum", PeriodAmount);
	document.getElementById("NumofPeriod").style.display = "none";
	
	window.location.href = "ClassSchedule2.html";
}




