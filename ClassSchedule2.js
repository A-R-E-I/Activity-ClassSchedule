window.addEventListener("load", GetInfo);
let count = 0;
function GetInfo()
{
	document.getElementById("btnsubmit").addEventListener("click", ScheduleInput);
	PeriodAmount = localStorage.getItem("Periodnum");
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

function ScheduleInput()
{
	PeriodAmount = localStorage.getItem("Periodnum");
	for (let i = 1; i <= PeriodAmount; i++) 
	{
		tally = i + count;
		alert(tally)
       	Classname = document.getElementById("txtClassname").value;
		Teachername = document.getElementById("txtTeacher").value;
		Roomnum = document.getElementById("txtroom").value;
		Hour = document.getElementById("txthour").value;
		Minute = document.getElementById("txtminute").value;
		Endhour = document.getElementById("txtEndhour").value;
		Endminute = document.getElementById("txtEndminute").value;
		Tablenames = Classname + " " + Teachername + " " + Roomnum + " ";  
		Tabletime = Hour + ":" + Minute + "-" + Endhour + ":" + Endminute; 
		Tableinfo = Tablenames + Tabletime;
		for (let i = 1; i <= 5; i++) 
	    {
			document.getElementById("ClassPd"+ tally + "," + i).textContent = Tableinfo;
		}
		PeriodAmount = 0
    }
    count = tally; 
    clear();
 	
	 
}

function clear()
{
	Classname = document.getElementById("txtClassname").value = " ";
	Teachername = document.getElementById("txtTeacher").value = " ";
	Roomnum = document.getElementById("txtroom").value = " ";
	Hour = document.getElementById("txthour").value = " ";
	Minute = document.getElementById("txtminute").value = " ";
	Endhour = document.getElementById("txtEndhour").value = " ";
	Endminute = document.getElementById("txtEndminute").value = " ";
}
