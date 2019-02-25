function myfuntion(){
 var state=document.getElementById("temp").value;
 console.log(state);
 var cityDaysMap={
 	'Tamil Nadu':["Chennai","Thanjavur","Coimbator"],
 	'Kerala':["Palakkad","kochi","Malappuram"],
 	'Karnataka': ["Bangalore","Manglore","Mysore"],
 	'Uttarpradesh': ["Gorakhpur","Lucknow","Kanpur","Varadsi"]
 }
   console.log(cityDaysMap[state]);
    SelectElement("city_select", cityDaysMap[state]);
} 

function SelectElement(id, city_array)
{    
	var x = document.getElementById(id);
	console.log(id);
	x.options.length = 0;
    for (var i = 0; i < city_array.length; i++) {
         var option = document.createElement("option");
         option.text = city_array[i];
         x.add(option);
      }
}
