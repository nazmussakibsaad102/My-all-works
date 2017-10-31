


function again() {
	// body...
	document.getElementById('new').innerHTML='on';
}

function alt() {
	// body...
	var text1,text2;
	text1=document.getElementById('first_name').value;
	text2=document.getElementById('last_name').value;
	document.getElementById("fullname").innerHTML=text1+" " +text2;
}
function sum() {
	// body...
	var text1,text2;
	text1=document.getElementById('first_name').value;
	text2=document.getElementById('last_name').value;
	document.getElementById("ans").innerHTML=eval(text1)+eval(text2);
}


function sub() {
	// body...
	var text1,text2;
	text1=document.getElementById('first_name').value;
	text2=document.getElementById('last_name').value;
	document.getElementById("ans").innerHTML=eval(text1)-eval(text2);
}


function mul() {
	// body...
	var text1,text2;
	text1=document.getElementById('first_name').value;
	text2=document.getElementById('last_name').value;
	document.getElementById("ans").innerHTML=eval(text1)*eval(text2);
}


function div() {
	// body...
	var text1,text2;
	text1=document.getElementById('first_name').value;
	text2=document.getElementById('last_name').value;
	document.getElementById("ans").innerHTML=eval(text1)/eval(text2);
}

function operation() {
	var text;
	text=document.getElementById("operation").value;
	document.getElementById("ans").innerHTML=eval(text);

	// body...
}




function celsius_converter(ferenheit){
	return 5/6*(ferenheit-32);
}

function object(){
	 var car={Type:'Marcedes', Model:'500', Color:'red'};
	return car.Model;
}
function ludu(max,min){
	document.getElementById('ludu').innerHTML=Math.floor(Math.random()*(max-min))+min;
}

function today() {
	// body...
	var today=new Date(),someday=new Date("2018-07-13");
	if (today>someday){
		 text="The day is before today"
	}
	else if (today==someday) { text='Today';}
	else  text='The day is after today';
	document.getElementById('day').innerHTML=text;
}