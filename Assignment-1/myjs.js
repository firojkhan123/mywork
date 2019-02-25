var days, month, year;

function dateOnChange(){
	days=document.getElementById("date").value;	
	days = parseInt(days);
}

function monthOnChange(){
month=document.getElementById("month").value;

}

function yearOnChange(){
	year=document.getElementById("year").value;
	year = parseInt(year);
}

function validate(){
	var monthDaysMap = {
				'January': '31', 
				'February': '29',
				'March': '31', 
				'April': '30',
				'May': '31', 
				'June': '30',
				'July': '31', 
				'August': '31',
				'September': '30', 
				'October': '31',
				'November': '30', 
				'December': '31',
			}


	if (days==undefined && month==undefined && year==undefined) {
		alert("please inter value");
	}

	if(monthDaysMap[month] >= days){
				if(month == "February")
				{ 
					var isLeapYear= false;
                   	    if( (0 == year % 4) && (0 != year % 100) || (0 == year % 400) )
                   	    {
                   	    	isLeapYear =true;
                        }
                    	if ((isLeapYear==false) && (days>=29))
                          {
                        	console.log("incorrect")
						   alert("incorrect date");
						  }
					   else if ((isLeapYear==true) && (days>29))
						  {
						  	console.log("incorrect")
						   alert("incorrect date");
                          }
                          else{
                          	console.log("given input date is correct")
                          }
				 }
				 else{
				 		console.log("given input date is correct")
				 }
	}
	else{
	 	console.log("given input date is not correct")
		alert("incorrect date");
	}


	console.log(days);
	console.log(month);
	console.log(year);


}