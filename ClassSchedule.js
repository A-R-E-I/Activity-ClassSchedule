window.addEventListener("load", addListener);
let count = 0 , i = 1;

function addListener()
{
	document.getElementById("NumofPeriod").style.display = "none";
	document.getElementById("scheduleInfo").style.display = "none";
	document.getElementById("btnNext").addEventListener("click", StudentQuestion);
	document.getElementById("btnNext2").addEventListener("click", Whatperiod);
	document.getElementById("btnsubmit").addEventListener("click", ScheduleInput);
	
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
	document.getElementById("scheduleInfo").style.display = "block";
	
}

function ScheduleInput()
{
	for (let i = i + count; i <= PeriodAmount;) 
	{
		Classname = document.getElementById("txtClassname").value;
		localStorage.setItem("Classname" + i, Classname);
		Teachername = document.getElementById("txtTeacher").value;
		localStorage.setItem("Teachername" + i, Teachername);
		Roomnum = document.getElementById("txtroom").value;
		localStorage.setItem("Roomnum" + i, Roomnum);
		Hour = document.getElementById("txthour").value;
		localStorage.setItem("Hour" + i, Hour);
		Minute = document.getElementById("txtminute").value;
		localStorage.setItem("Minute" + i, Minute);
		Endhour = document.getElementById("txtEndhour").value;
		localStorage.setItem("Endhour" + i, Endhour);
		Endminute = document.getElementById("txtEndminute").value;
		localStorage.setItem("Endminute" + i, Endminute);
		
    }
    setvalues();
 	
	 
}

function setvalues()
{
	count = count + 1;
	if(count == PeriodAmount)
	{
		window.location.href = "ClassSchedule2.html";
	}
}


