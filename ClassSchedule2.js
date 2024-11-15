window.addEventListener("load", GetInfo);
let count = 0, i = 1;
function GetInfo()
{
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
	for (let i = i + count; i <= PeriodAmount;) 
	{
		
		tally = i
       	Classname = localStorage.getItem("Classname" + i);
		Teachername = localStorage.getItem("Teachername" + i);
		Roomnum = localStorage.getItem("Roomnum" + i);
		Hour = localStorage.getItem("Hour" + i);
		Minute = localStorage.getItem("Minute" + i);
		Endhour = localStorage.getItem("Endhour" + i);
		Endminute = localStorage.getItem("Endminute" + i);
		Tablenames = Classname + " " + Teachername + " " + Roomnum + " ";  
		Tabletime = Hour + ":" + Minute + "-" + Endhour + ":" + Endminute; 
		Tableinfo = Tablenames + Tabletime;
		for (let i = 1; i <= 5; i++) 
	    {
			document.getElementById("ClassPd"+ tally + "," + i).textContent = Tableinfo;
		}
		
    }
    count = count + 1;

}

