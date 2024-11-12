window.addEventListener("load", addListener);
var PeriodAmount = 0

function addListener()
{
	document.getElementById("NumofPeriod").style.display = "none";
	document.getElementById("scheduleInfo").style.display = "none";
	document.getElementById("scheduleInfo2").style.display = "none";
	document.getElementById("scheduleInfo3").style.display = "none";
	document.getElementById("scheduleInfo4").style.display = "none";
	document.getElementById("scheduleInfo5").style.display = "none";
	document.getElementById("scheduleInfo6").style.display = "none";
	document.getElementById("scheduleInfo7").style.display = "none";
	document.getElementById("scheduleInfo8").style.display = "none";
	document.getElementById("btnsubmit").style.display = "none";
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
	document.getElementById("NumofPeriod").style.display = "none";
	switch(parseInt(PeriodAmount))
	{
		case 1:
			document.getElementById("scheduleInfo").style.display = "block";
			document.getElementById("btnsubmit").style.display = "block";
			break;
			
		case 2:
			document.getElementById("scheduleInfo").style.display = "block";
			document.getElementById("scheduleInfo2").style.display = "block";
			document.getElementById("btnsubmit").style.display = "block";
			break;
			
		case 3:
			document.getElementById("scheduleInfo").style.display = "block";
			document.getElementById("scheduleInfo2").style.display = "block";
			document.getElementById("scheduleInfo3").style.display = "block";
			document.getElementById("btnsubmit").style.display = "block";
			break;
			
		case 4:
			document.getElementById("scheduleInfo").style.display = "block";
			document.getElementById("scheduleInfo2").style.display = "block";
			document.getElementById("scheduleInfo3").style.display = "block";
			document.getElementById("scheduleInfo4").style.display = "block";
			document.getElementById("btnsubmit").style.display = "block";
			break;
		
		case 5:
			document.getElementById("scheduleInfo").style.display = "block";
			document.getElementById("scheduleInfo2").style.display = "block";
			document.getElementById("scheduleInfo3").style.display = "block";
			document.getElementById("scheduleInfo4").style.display = "block";
			document.getElementById("scheduleInfo5").style.display = "block";
			document.getElementById("btnsubmit").style.display = "block";
			break;
			
		case 6:
			document.getElementById("scheduleInfo").style.display = "block";
			document.getElementById("scheduleInfo2").style.display = "block";
			document.getElementById("scheduleInfo3").style.display = "block";
			document.getElementById("scheduleInfo4").style.display = "block";
			document.getElementById("scheduleInfo5").style.display = "block";
			document.getElementById("scheduleInfo6").style.display = "block";
			document.getElementById("btnsubmit").style.display = "block";
			break;
			
		case 7:
			document.getElementById("scheduleInfo").style.display = "block";
			document.getElementById("scheduleInfo2").style.display = "block";
			document.getElementById("scheduleInfo3").style.display = "block";
			document.getElementById("scheduleInfo4").style.display = "block";
			document.getElementById("scheduleInfo5").style.display = "block";
			document.getElementById("scheduleInfo6").style.display = "block";
			document.getElementById("scheduleInfo7").style.display = "block";
			document.getElementById("btnsubmit").style.display = "block";
			break;
		
		case 8:
			document.getElementById("scheduleInfo").style.display = "block";
			document.getElementById("scheduleInfo2").style.display = "block";
			document.getElementById("scheduleInfo3").style.display = "block";
			document.getElementById("scheduleInfo4").style.display = "block";
			document.getElementById("scheduleInfo5").style.display = "block";
			document.getElementById("scheduleInfo6").style.display = "block";
			document.getElementById("scheduleInfo7").style.display = "block";
			document.getElementById("scheduleInfo8").style.display = "block";
			document.getElementById("btnsubmit").style.display = "block";
			break;
	}

}

function ScheduleInput()
{
	switch(parseInt(PeriodAmount))
	{
		case 1:
			ScheduleValue();
			break;
			
		case 2:
			ScheduleValue();
			ScheduleValue2();
			break;
			
		case 3:
			ScheduleValue();
			ScheduleValue2();
			ScheduleValue3();
			break;
			
		case 4:
			ScheduleValue();
			ScheduleValue2();
			ScheduleValue3();
			ScheduleValue4();
			break;
		
		case 5:
			ScheduleValue();
			ScheduleValue2();
			ScheduleValue3();
			ScheduleValue4();
			ScheduleValue5();
			break;
			
		case 6:
			ScheduleValue();
			ScheduleValue2();
			ScheduleValue3();
			ScheduleValue4();
			ScheduleValue5();
			ScheduleValue6();
			break;
			
		case 7:
			ScheduleValue();
			ScheduleValue2();
			ScheduleValue3();
			ScheduleValue4();
			ScheduleValue5();
			ScheduleValue6();
			ScheduleValue7();
			break;
		
		case 8:
			ScheduleValue();
			ScheduleValue2();
			ScheduleValue3();
			ScheduleValue4();
			ScheduleValue5();
			ScheduleValue6();
			ScheduleValue7();
			ScheduleValue8();
			break;
	}
}

function ScheduleValue()
{
	Classname = document.getElementById("txtClassname").value;
	localStorage.setItem("Classname", Classname);
	Teachername = document.getElementById("txtTeacher").value;
	localStorage.setItem("Teachername", Teachername);
	Roomnum = document.getElementById("txtroom").value;
	localStorage.setItem("Roomnum", Roomnum);
	Hour = document.getElementById("txthour").value;
	localStorage.setItem("Hour", Hour);
	Minute = document.getElementById("txtminute").value;
	localStorage.setItem("Minute", Minute);
	Endhour = document.getElementById("txtEndhour").value;
	localStorage.setItem("Endhour", Endhour);
	Endminute = document.getElementById("txtEndminute").value;
	localStorage.setItem("Endminute", Endminute);
	
	window.location.href = "ClassSchedule2.html";
}

function ScheduleValue2()
{
	Classname2 = document.getElementById("txtClassname2").value;
	localStorage.setItem("Classname2", Classname2);
	Teachername2 = document.getElementById("txtTeacher2").value;
	localStorage.setItem("Teachername2", Teachername2);
	Roomnum2 = document.getElementById("txtroom2").value;
	localStorage.setItem("Roomnum2", Roomnum2);
	Hour2 = document.getElementById("txthour2").value;
	localStorage.setItem("Hour2", Hour2);
	Minute2 = document.getElementById("txtminute2").value;
	localStorage.setItem("Minute2", Minute2);
	Endhour2 = document.getElementById("txtEndhour2").value;
	localStorage.setItem("Endhour2", Endhour2);
	Endminute2 = document.getElementById("txtEndminute2").value;
	localStorage.setItem("Endminute2", Endminute2);
	
	window.location.href = "ClassSchedule2.html";
}

function ScheduleValue3()
{
	Classname3 = document.getElementById("txtClassname3").value;
	localStorage.setItem("Classname3", Classname3);
	Teachername3 = document.getElementById("txtTeacher3").value;
	localStorage.setItem("Teachername3", Teachername3);
	Roomnum3 = document.getElementById("txtroom3").value;
	localStorage.setItem("Roomnum3", Roomnum3);
	Hour3 = document.getElementById("txthour3").value;
	localStorage.setItem("Hour3", Hour3);
	Minute3 = document.getElementById("txtminute3").value;
	localStorage.setItem("Minute3", Minute3);
	Endhour3 = document.getElementById("txtEndhour3").value;
	localStorage.setItem("Endhour3", Endhour3);
	Endminute3 = document.getElementById("txtEndminute3").value;
	localStorage.setItem("Endminute3", Endminute3);
	
	window.location.href = "ClassSchedule2.html";
}

function ScheduleValue4()
{
	Classname4 = document.getElementById("txtClassname4").value;
	localStorage.setItem("Classname4", Classname4);
	Teachername4 = document.getElementById("txtTeacher4").value;
	localStorage.setItem("Teachername4", Teachername4);
	Roomnum4 = document.getElementById("txtroom4").value;
	localStorage.setItem("Roomnum4", Roomnum4);
	Hour4 = document.getElementById("txthour4").value;
	localStorage.setItem("Hour4", Hour4);
	Minute4 = document.getElementById("txtminute4").value;
	localStorage.setItem("Minute4", Minute4);
	Endhour4 = document.getElementById("txtEndhour4").value;
	localStorage.setItem("Endhour4", Endhour4);
	Endminute4 = document.getElementById("txtEndminute4").value;
	localStorage.setItem("Endminute4", Endminute4);
	
	window.location.href = "ClassSchedule2.html";
}

function ScheduleValue5()
{
	Classname5 = document.getElementById("txtClassname5").value;
	localStorage.setItem("Classname5", Classname5);
	Teachername5 = document.getElementById("txtTeacher5").value;
	localStorage.setItem("Teachername5", Teachername5);
	Roomnum5 = document.getElementById("txtroom5").value;
	localStorage.setItem("Roomnum5", Roomnum5);
	Hour5 = document.getElementById("txthour5").value;
	localStorage.setItem("Hour5", Hour5);
	Minute5 = document.getElementById("txtminute5").value;
	localStorage.setItem("Minute5", Minute5);
	Endhour5 = document.getElementById("txtEndhour5").value;
	localStorage.setItem("Endhour5", Endhour5);
	Endminute5 = document.getElementById("txtEndminute5").value;
	localStorage.setItem("Endminute5", Endminute5);
	
	window.location.href = "ClassSchedule2.html";
}

function ScheduleValue6()
{
	Classname6 = document.getElementById("txtClassname6").value;
	localStorage.setItem("Classname6", Classname6);
	Teachername6 = document.getElementById("txtTeacher6").value;
	localStorage.setItem("Teachername6", Teachername6);
	Roomnum6 = document.getElementById("txtroom6").value;
	localStorage.setItem("Roomnum6", Roomnum6);
	Hour6 = document.getElementById("txthour6").value;
	localStorage.setItem("Hour6", Hour6);
	Minute6 = document.getElementById("txtminute6").value;
	localStorage.setItem("Minute6", Minute6);
	Endhour6 = document.getElementById("txtEndhour6").value;
	localStorage.setItem("Endhour6", Endhour6);
	Endminute6 = document.getElementById("txtEndminute6").value;
	localStorage.setItem("Endminute6", Endminute6);
	
	window.location.href = "ClassSchedule2.html";
}

function ScheduleValue7()
{
	Classname7 = document.getElementById("txtClassname7").value;
	localStorage.setItem("Classname7", Classname7);
	Teachername7 = document.getElementById("txtTeacher7").value;
	localStorage.setItem("Teachername7", Teachername7);
	Roomnum7 = document.getElementById("txtroom7").value;
	localStorage.setItem("Roomnum7", Roomnum7);
	Hour7 = document.getElementById("txthour7").value;
	localStorage.setItem("Hour7", Hour7);
	Minute7 = document.getElementById("txtminute7").value;
	localStorage.setItem("Minute7", Minute7);
	Endhour7 = document.getElementById("txtEndhour7").value;
	localStorage.setItem("Endhour7", Endhour7);
	Endminute7 = document.getElementById("txtEndminute7").value;
	localStorage.setItem("Endminute7", Endminute7);
	
	window.location.href = "ClassSchedule2.html";
}

function ScheduleValue8()
{
	Classname8 = document.getElementById("txtClassname8").value;
	localStorage.setItem("Classname8", Classname8);
	Teachername8 = document.getElementById("txtTeacher8").value;
	localStorage.setItem("Teachername8", Teachername8);
	Roomnum8 = document.getElementById("txtroom8").value;
	localStorage.setItem("Roomnum8", Roomnum8);
	Hour8 = document.getElementById("txthour8").value;
	localStorage.setItem("Hour8", Hour8);
	Minute8 = document.getElementById("txtminute8").value;
	localStorage.setItem("Minute8", Minute8);
	Endhour8 = document.getElementById("txtEndhour8").value;
	localStorage.setItem("Endhour8", Endhour8);
	Endminute8 = document.getElementById("txtEndminute8").value;
	localStorage.setItem("Endminute8", Endminute8);
	
	window.location.href = "ClassSchedule2.html";
}
