/*
authors: Julie Kirkpatrick
purpose:field validation on the report page on the report page
*/

const submitButton = document.getElementById("submitAnswer");

document.addEventListener('DOMContentLoaded', function () {
	//when submit clicked
submitButton.addEventListener("click", function(){
	const email = document.getElementById("email");
	console.log(email.value);
	
	//not a valid email 
	if (!checkEmail(email.value)){
	 	alert("Please enter a valid email address");
		email.style.backgroundColor = "#faa2a2";
		
		}
	 
	const fname = document.getElementById("fname");
	console.log(fname.value);
	//not a valid first name
	 if (!checkTextInput(fname.value)){
	 	alert("Please enter a valid first name");
		fname.style.backgroundColor = "#faa2a2";
		
		}
	});
});

function checkEmail(potentialEmail){
	var mailformat = /\S+@\S+\.\S+/;
	return(mailformat.test(potentialEmail))
}

function checkTextInput(potentialName){
	//console.log("inside "+potentialName)
	var nameFormat = /^[A-Za-z]+[-.A-Za-z]*/;
	return(nameFormat.test(potentialName))
}

const functions = {
	checkEmail: checkEmail,
	checkTextInput: checkTextInput
}

//module.exports = functions